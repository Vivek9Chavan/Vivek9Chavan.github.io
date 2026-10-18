"""Validate the built site's first-party routes and assets without external requests."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json

root = Path('_site')
required = ['', 'projects', 'publications', 'blog', 'about', 'press', 'openings', 'resources', 'contact']
for route in required:
    assert (root / route / 'index.html').is_file(), f'Missing route: /{route}/'

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.ids = [], set()
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs and not attrs[key].startswith('//'):
                self.links.append(attrs[key])

docs = {}
for page in root.rglob('*.html'):
    parser = Document()
    source = page.read_text()
    assert '{% ' not in source, f'Unrendered template: {page}'
    parser.feed(source)
    docs[page] = parser

errors = []
for page, doc in docs.items():
    for link in doc.links:
        parts = urlsplit(link)
        if parts.scheme or parts.netloc:
            continue
        target = (root / unquote(parts.path).lstrip('/') if parts.path.startswith('/')
                  else page.parent / unquote(parts.path)) if parts.path else page
        if target.is_dir():
            target /= 'index.html'
        if not target.exists():
            # Original author pages contain historic external links and Markdown
            # appendix URLs; only broken first-party navigation/assets are fatal.
            errors.append(f'{page}: {link}')
        elif parts.fragment and target in docs and unquote(parts.fragment) not in docs[target].ids:
            errors.append(f'{page}: missing anchor {link}')

publications = json.loads(Path('_data/publications.json').read_text())
source = (root / 'publications/index.html').read_text()
assert source.count('class="publication"') == len(publications)
assert source.count('class="author-self"') == len(publications)
if errors:
    raise SystemExit('\n'.join(errors))
print(f'Validated {len(docs)} pages and {len(publications)} publications.')
