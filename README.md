# Vivek Chavan: personal website

Jekyll portfolio at https://vivekchavan.com. The design uses warm off-white, muted green, regular-weight typography, and underlined author names.

## Content

- Navigation: `nav_links` in `_config.yml`. CV is added by `_includes/nav.html`.
- Publications: `_data/publications.json`; set `selected: true` for a homepage feature.
- News: `index.md`. Recent blog posts populate automatically.
- Blog: `_posts/`. Preserve filenames to preserve public URLs. `hide_from_index: true` hides an unfinished post from listings without removing its URL.
- Projects, press, opportunities and resources: their corresponding root Markdown files.
- CV: `assets/Vivek_Chavan_CV_2026_Q4.pdf`, linked through `/cv.html`.
- Research statement: `assets/Vivek_Chavan_Research_Proposal_2026.pdf`.

## Typography

The end of `assets/css/custom.css` contains `--text-body` (17px), `--text-small` (14px), `--text-label` (12px), and `--text-nav` (15px). Adjust those variables to control the main text groups. The navigation collapses below 1180px so the restored links stay readable.

## Local build

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Before merging, run `bundle exec jekyll build --strict_front_matter` and check the rendered site. Keep existing GitHub Pages settings and `CNAME`. Original PDFs, images, posts, and project files remain in place.

## Publication metadata

The bibliography consolidates duplicate Scholar entries and keeps supplements with their papers. IndEgo is listed as NeurIPS 2025 Datasets & Benchmarks. Non-archival ECCV workshop contributions and manuscripts under review are explicitly labelled. No manually maintained citation counts are displayed.
