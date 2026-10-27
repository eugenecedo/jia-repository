/* All features work without a framework, account, or network connection. */
function startPortfolio() {
  'use strict';

  // This snapshot is used only when file:// blocks reading an external stylesheet.
  // The packaged standalone HTML also keeps its own current, editable stylesheet.
  const FALLBACK_STYLES = "/* Jiandra \u2014 a self-contained, responsive portfolio. No external fonts or assets. */\n:root {\n  color-scheme: light;\n  --paper: #f7f5ef;\n  --surface: #fdfbf7;\n  --tint: #efede4;\n  --ink: #303d32;\n  --text: #42483e;\n  --muted: #6e7266;\n  --gold: #90703c;\n  --gold-soft: #e8dcc3;\n  --line: #dcded2;\n  --dark: #344334;\n  --on-dark: #f5f1e6;\n  --header-bg: rgba(247,245,239,.94);\n  --shadow: 0 24px 60px rgba(44,52,38,.08);\n  --serif: Georgia, 'Times New Roman', serif;\n  --sans: 'Avenir Next', Avenir, 'Segoe UI', Arial, sans-serif;\n  --ease: cubic-bezier(.2,.7,.3,1);\n}\n[data-theme=\"dark\"] {\n  color-scheme: dark;\n  --paper: #1c241f;\n  --surface: #232d26;\n  --tint: #29342c;\n  --ink: #eee9db;\n  --text: #d6d9ce;\n  --muted: #b3baaa;\n  --gold: #d4b77b;\n  --gold-soft: #4c4734;\n  --line: #424d40;\n  --dark: #d9e0ce;\n  --on-dark: #233026;\n  --header-bg: rgba(28,36,31,.95);\n  --shadow: 0 24px 60px rgba(0,0,0,.18);\n}\n* {box-sizing:border-box}\nhtml {scroll-behavior:smooth;scroll-padding-top:100px}\nbody {margin:0;background:var(--paper);color:var(--text);font:15px/1.75 var(--sans);-webkit-font-smoothing:antialiased}\nbody, .site-header, input, textarea, select {transition:background-color .25s,color .25s,border-color .25s}\nbutton, input, textarea, select {font:inherit}\nbutton, a, input, textarea, select {-webkit-tap-highlight-color:transparent}\nbutton {cursor:pointer}\nbutton {color:inherit}\nbutton, input, textarea, select {border-radius:0}\na {color:inherit;text-decoration:none}\nbutton {background:none;border:0}\nbutton:disabled {cursor:wait;opacity:.6}\nimg, svg {display:block;max-width:100%}\np, h1, h2, h3, h4, blockquote {margin:0}\nh1, h2, h3 {font-family:var(--serif);font-weight:400;color:var(--ink)}\nem {font-family:var(--serif);font-weight:400;color:var(--gold)}\n::selection {background:var(--gold-soft);color:var(--ink)}\n:focus-visible {outline:3px solid var(--gold);outline-offset:5px;border-radius:4px}\n[hidden] {display:none!important}\n.shell {width:min(1120px,calc(100% - 96px));margin-inline:auto}\n.icon-library {position:absolute;width:0;height:0;overflow:hidden}\n.icon {width:20px;height:20px;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}\n.skip-link {position:fixed;top:-80px;left:20px;z-index:1000;padding:10px 22px;background:var(--ink);color:var(--paper)}\n.skip-link:focus {top:12px}\n.site-header {position:sticky;top:0;z-index:50;background:var(--header-bg);border-bottom:1px solid transparent;backdrop-filter:blur(16px)}\n.site-header.scrolled {border-color:var(--line)}\n.header-inner {height:88px;display:flex;align-items:center;justify-content:space-between;gap:24px}\n.brand {font:italic 34px/1 var(--serif);color:var(--ink);letter-spacing:-1.5px}\n.brand-dot {color:var(--gold)}\n.main-nav {display:flex;gap:27px;align-items:center;margin-left:auto}\n.main-nav a {position:relative;color:var(--muted);font-size:12px;letter-spacing:.02em;padding:10px 0;transition:color .2s}\n.main-nav a::after {position:absolute;bottom:1px;left:0;right:0;content:\"\";height:1px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .25s}\n.main-nav a:hover, .main-nav a.active {color:var(--ink)}\n.main-nav a:hover::after, .main-nav a.active::after {transform:scaleX(1)}\n.main-nav a:last-child {margin-left:7px;color:var(--ink)}\n.main-nav a:last-child span {margin-left:5px;color:var(--gold)}\n.header-actions {display:flex;align-items:center;gap:5px;margin-left:16px}\n.icon-button {width:42px;height:42px;display:inline-flex;justify-content:center;align-items:center;border:1px solid var(--line);border-radius:50%;transition:background .2s,transform .2s,border-color .2s}\n.icon-button:hover {background:var(--gold-soft);border-color:var(--gold)}\n.icon-button:active {transform:scale(.94)}\n.theme-toggle {width:37px;height:37px;border-color:transparent}\n.theme-toggle .icon {width:18px;height:18px}\n.menu-toggle {display:none}\n.scroll-progress {position:absolute;bottom:-1px;height:2px;width:100%;transform:scaleX(0);transform-origin:left;background:var(--gold)}\n.hero {position:relative;min-height:696px;display:grid;grid-template-columns:1.15fr 1fr;gap:75px;align-items:center;padding-top:44px;padding-bottom:90px}\n.eyebrow, .overline {font-size:10px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:var(--gold)}\n.hero .eyebrow {display:flex;align-items:center;gap:12px;margin-bottom:25px;font-size:9px;letter-spacing:.15em}\n.tiny-line {width:28px;height:1px;background:var(--gold)}\nh1 {position:relative;font-size:clamp(60px,5.8vw,76px);line-height:1.05;letter-spacing:-3.6px}\nh1 em {position:relative;white-space:nowrap}\nh1 em::after {content:\"\";position:absolute;left:1px;right:0;bottom:-8px;height:9px;border-top:1px solid var(--gold);border-radius:50%;transform:rotate(-3deg)}\n.heading-spark {position:absolute;left:295px;bottom:6px;width:40px;height:40px;fill:none;stroke:var(--gold);stroke-width:.75}\n.hero-intro {font-size:14px;margin-top:37px;color:var(--ink)}\n.hero-intro strong {font-weight:600}\n.hero-description {font-size:14px;max-width:350px;color:var(--muted);margin-top:4px}\n.hero-ctas {display:flex;align-items:center;gap:26px;margin-top:30px;flex-wrap:wrap}\n.button {display:inline-flex;align-items:center;justify-content:center;gap:22px;padding:14px 23px;min-height:50px;font-size:11px;font-weight:600;letter-spacing:.015em;border:1px solid transparent;transition:background .2s,transform .2s,border-color .2s,box-shadow .2s}\n.button:hover {transform:translateY(-2px);box-shadow:0 8px 20px rgba(44,52,38,.10)}\n.button-dark {background:var(--dark);color:var(--on-dark)}\n.button-dark:hover {background:var(--gold);color:var(--paper)}\n.button .icon {width:17px;height:17px}\n.button-outline {border-color:var(--line);color:var(--ink);background:var(--surface)}\n.button-outline:hover {border-color:var(--gold)}\n.text-link {display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:600;padding:6px 0;color:var(--ink);text-underline-offset:5px}\n.text-link:hover {color:var(--gold);text-decoration:underline}\n.text-link .icon {width:17px;height:17px}\n.hero-note {margin-top:35px;display:flex;align-items:center;gap:8px;font-size:10px;letter-spacing:.02em;color:var(--muted)}\n.note-dot {width:5px;height:5px;border-radius:50%;background:var(--gold)}\n.hero-visual {position:relative;padding:18px 23px 0;background:var(--tint);margin-top:-8px;border:1px solid var(--line);transform:rotate(2deg)}\n.visual-caption {display:flex;justify-content:space-between;gap:10px;font-size:7px;font-weight:600;letter-spacing:.15em;color:var(--muted)}\n.portrait-stage {position:relative;min-height:394px;padding-top:26px;display:flex;align-items:flex-start;justify-content:center}\n.portrait-arch {position:relative;width:78%;height:310px;background:#e4dcc8;border-radius:150px 150px 0 0;overflow:hidden;display:flex;justify-content:center;align-items:center;color:#56634a;isolation:isolate}\n.portrait-arch::before {position:absolute;inset:0;content:\"\";background:radial-gradient(ellipse at 28% 10%,#f9f2df 0,transparent 62%),linear-gradient(120deg,transparent 20%,#b9bb9b55);z-index:-1}\n.arch-line {position:absolute;inset:14px;border:1px solid #afa88699;border-radius:150px 150px 0 0;z-index:2;pointer-events:none}\n.sun-motif {position:absolute;width:175px;height:175px;border:1px solid #a18a5766;border-radius:50%;top:25px;right:-38px}\n.sun-motif::before,.sun-motif::after {content:\"\";position:absolute;inset:9px;border:1px solid #a18a5744;border-radius:50%}\n.sun-motif::after {inset:18px}\n.monogram {font:italic 142px/1 var(--serif);letter-spacing:-10px;padding-right:14px;margin-top:28px;text-shadow:0 3px 0 #f7f0df88;transform:rotate(-2deg)}\n.portrait-kicker {position:absolute;bottom:26px;font-size:8px;letter-spacing:.21em;text-transform:uppercase;color:#525840}\n.profile-photo {position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1}\n.profile-photo:not([hidden])~.portrait-kicker {z-index:2;background:rgba(247,245,239,.9);padding:5px 8px;bottom:22px;letter-spacing:.15em}\n.orbit-spark {position:absolute;top:5px;right:-34px;width:72px;height:72px;color:var(--gold);transform:rotate(10deg)}\n.little-note {position:absolute;bottom:70px;left:-49px;width:133px;padding:18px 15px;background:var(--surface);box-shadow:0 8px 18px #39433010;border:1px solid var(--line);transform:rotate(-9deg);font:italic 16px/1.25 var(--serif);color:var(--ink)}\n.little-note .icon {color:var(--gold);margin-bottom:12px;width:19px;height:19px;stroke-width:1.3}\n.portrait-signature {position:absolute;bottom:12px;text-align:center;font:italic 24px/1.2 var(--serif);letter-spacing:-.7px;color:var(--ink);transform:rotate(-2deg);max-width:100%;overflow-wrap:anywhere}\n.visual-bottom {border-top:1px solid var(--line);display:flex;justify-content:space-around;align-items:center;padding:16px 0;font-size:8px;letter-spacing:.13em;color:var(--muted)}\n.diamond {color:var(--gold);font-size:10px}\n.scroll-cue {position:absolute;bottom:20px;left:0;display:flex;align-items:center;gap:10px;font-size:9px;letter-spacing:.025em;color:var(--muted)}\n.scroll-ring {width:28px;height:34px;border:1px solid var(--line);border-radius:20px;text-align:center;line-height:31px;color:var(--gold)}\n.values-strip {border-block:1px solid var(--line)}\n.values-inner {display:flex;justify-content:space-between;gap:25px;padding-block:24px;align-items:center}\n.values-inner>span {font:italic 18px var(--serif);color:var(--muted)}\n.values-inner p {font-size:11px;letter-spacing:.02em;color:var(--ink)}\n.values-inner b {margin-right:16px;font-size:9px;letter-spacing:.08em;color:var(--gold);font-weight:500}\n.section {padding-block:90px}\n.section-eyebrow {display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);padding-bottom:18px;margin-bottom:43px;gap:15px;font-size:9px;letter-spacing:.12em;color:var(--muted);font-weight:500}\n.section-eyebrow .icon {color:var(--gold);height:18px;width:18px}\n.section-eyebrow>span+span {font-size:8px}\nh2 {font-size:48px;line-height:1.15;letter-spacing:-1.9px}\n.about-grid {display:grid;grid-template-columns:1fr 1.05fr;gap:91px;align-items:center}\n.about-statement {position:relative;padding:41px 39px;min-height:423px;background:#344334;color:#f5f1e6;overflow:hidden;display:flex;flex-direction:column;align-items:flex-start}\n.about-statement .overline {font-size:8px;color:#cfc39b;position:relative;z-index:1}\n.about-statement h2 {color:#f5f1e6;font-size:40px;margin-top:33px;line-height:1.22;letter-spacing:-1.4px;position:relative;z-index:1}\n.about-statement h2 em {color:#ddc791}\n.about-statement p {font-size:10px;color:#d1d6c7;line-height:1.65;margin-top:36px;position:relative;z-index:1}\n.statement-mark {position:absolute;bottom:-46px;right:-9px;font:italic 225px var(--serif);color:#c9d1b710;line-height:1;letter-spacing:-10px}\n.about-copy h3 {font-size:42px;line-height:1.18;letter-spacing:-1.5px;margin:14px 0 23px}\n.body-large {font-size:15px;line-height:1.9;color:var(--muted);max-width:420px}\n.mission-block {display:flex;gap:17px;padding-top:25px;margin-top:25px;border-top:1px solid var(--line)}\n.small-icon {display:flex;width:35px;height:35px;flex-shrink:0;justify-content:center;align-items:center;border:1px solid var(--line);border-radius:50%;color:var(--gold)}\n.small-icon .icon {height:15px;width:15px}\n.mission-block h4 {font-size:12px;font-weight:600;margin-bottom:7px;color:var(--ink)}\n.mission-block p {font-size:12px;color:var(--muted);line-height:1.8}\n.about-tags {display:flex;gap:8px;flex-wrap:wrap;margin-top:23px}\n.about-tags span {font-size:9px;color:var(--muted);border:1px solid var(--line);padding:5px 11px;border-radius:20px}\n.journey-section {background:var(--tint)}\n.section-heading {display:flex;align-items:flex-end;justify-content:space-between;gap:40px;margin-bottom:38px}\n.section-heading>p {font-size:12px;color:var(--muted);line-height:1.9;margin-bottom:4px;max-width:360px}\n.journey-grid {display:grid;grid-template-columns:repeat(3,1fr);gap:34px}\n.journey-card {padding-top:14px}\n.step-line {display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--line);padding-block:17px 21px;margin-bottom:7px}\n.step-number {font:italic 33px var(--serif);color:var(--gold)}\n.step-line .icon {color:var(--gold);width:24px;height:24px;stroke-width:1.1}\n.journey-card .overline {font-size:8px;color:var(--muted);letter-spacing:.13em}\n.journey-card h3 {font-size:33px;margin:9px 0 15px;letter-spacing:-.7px}\n.journey-card>p {font-size:12px;color:var(--muted);max-width:285px;line-height:1.9;min-height:69px}\n.journey-card .text-link {margin-top:24px}\n.portfolio-tools {display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:26px}\n.filter-group {display:flex;align-items:center;gap:6px;flex-wrap:wrap}\n.filter-button {font-size:10px;padding:9px 15px;border:1px solid transparent;border-radius:30px;color:var(--muted);transition:background .2s,color .2s,border-color .2s}\n.filter-button:hover {border-color:var(--line);color:var(--ink)}\n.filter-button.active {background:var(--ink);color:var(--paper)}\n.result-count {font-size:9px;color:var(--muted);white-space:nowrap}\n.portfolio-grid {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}\n.work-card {position:relative;background:var(--surface);border:1px solid var(--line);min-width:0;display:flex;flex-direction:column;transition:transform .3s var(--ease),box-shadow .3s}\n.work-card:hover {transform:translateY(-5px);box-shadow:var(--shadow)}\n.work-card:focus-within {outline:2px solid var(--gold);outline-offset:4px}\n.work-card button.text-link::after {content:\"\";position:absolute;inset:0;z-index:5;cursor:pointer}\n.work-art {height:250px;overflow:hidden;position:relative;isolation:isolate;display:flex;align-items:center;justify-content:center;margin:9px 9px 0}\n.work-art.creative {background:#e7dfcf;color:#526044}\n.work-art.projects {background:#dce0d4;color:#45573d}\n.work-art.goals {background:#e7ddcc;color:#7d6544}\n.work-art::after {content:\"\";position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,#ffffff0b 4px);pointer-events:none;z-index:3}\n.art-label {font-size:7px;position:absolute;left:15px;top:13px;letter-spacing:.15em;color:#46503d;z-index:4}\n.art-number {font:italic 13px var(--serif);position:absolute;bottom:12px;right:15px;color:#46503d;z-index:4}\n.art-paper {height:170px;width:130px;background:#fbf8f0;box-shadow:5px 8px 20px #504b3318;transform:rotate(-10deg);border:1px solid #d6d0bc;display:flex;flex-direction:column;align-items:center;justify-content:center}\n.art-paper::before {content:\"\";position:absolute;width:100%;height:100%;background:#f3eddf;border:1px solid #d6d0bc;transform:rotate(18deg);z-index:-1}\n.art-paper .icon {width:42px;height:42px;stroke-width:.8;margin-bottom:10px}\n.art-paper span {font:italic 24px var(--serif);letter-spacing:-1px}\n.art-grid {display:grid;grid-template-columns:repeat(3,48px);grid-template-rows:repeat(3,48px);gap:7px;transform:rotate(-10deg)}\n.art-grid span {background:#788365;border-radius:1px}\n.art-grid span:nth-child(2),.art-grid span:nth-child(4),.art-grid span:nth-child(8) {background:#a4ab8c}\n.art-grid span:nth-child(3),.art-grid span:nth-child(7) {background:#e9eadf;border:1px solid #a0a68a}\n.art-grid span:nth-child(5) {border-radius:50%;background:#d9c69b}\n.art-grid span:nth-child(6) {border-top-right-radius:50%}\n.art-grid span:nth-child(9) {border-bottom-left-radius:50%;background:#506448}\n.art-arch {width:143px;height:174px;border-radius:100px 100px 0 0;border:1px solid #a7946d;position:relative;overflow:hidden;background:#d8d0b5}\n.art-arch::before {content:\"\";position:absolute;width:142px;height:112px;border-radius:50%;background:#aaac8a;left:-33px;bottom:-38px;box-shadow:65px -10px 0 #797f62}\n.art-arch::after {content:\"\";position:absolute;width:44px;height:44px;border-radius:50%;background:#f9f0cf;left:49px;top:29px;box-shadow:0 0 0 7px #f9f0cf33,0 0 0 14px #f9f0cf22}\n.work-content {padding:21px 20px 22px;flex:1;display:flex;flex-direction:column;align-items:flex-start}\n.work-meta {display:flex;justify-content:space-between;width:100%;align-items:center;gap:8px;font-size:8px;color:var(--muted);letter-spacing:.035em}\n.work-meta span:last-child {width:5px;height:5px;background:var(--gold);border-radius:50%;flex-shrink:0}\n.work-card h3 {font-size:24px;line-height:1.2;margin:11px 0 11px;letter-spacing:-.6px;overflow-wrap:anywhere}\n.work-card p {font-size:11px;color:var(--muted);line-height:1.8;overflow-wrap:anywhere}\n.work-card .text-link {margin-top:auto;padding-top:23px;justify-content:space-between;width:100%;font-size:10px}\n.empty-state {padding:40px;text-align:center;background:var(--tint);color:var(--muted)}\n.notice {padding:20px;border:1px solid var(--line)}\n.faith-section {background:#344334;color:#dce1d2}\n.faith-grid {display:grid;grid-template-columns:1fr 1.1fr;gap:78px;align-items:center}\n.faith-copy .eyebrow {color:#c6b589;font-size:9px}\n.faith-copy h2 {color:#f5f1e6;margin-top:22px;font-size:43px;letter-spacing:-1.6px}\n.faith-copy h2 em {color:#ddc791}\n.faith-copy>p:not(.eyebrow) {font-size:12px;color:#d1d6c7;margin-top:20px;line-height:1.9}\n.faith-mark {width:55px;height:55px;fill:none;stroke:#c6b589;stroke-width:.8;margin-top:30px}\n.verse-panel {border:1px solid #b9bf9e66;background:#ffffff04;padding:24px 30px}\n.verse-top {display:flex;align-items:center;justify-content:space-between;gap:10px}\n.verse-top .overline {color:#cfc39b;font-size:8px;letter-spacing:.12em}\n.verse-panel .icon-button {color:#e5e3d5;border-color:#b9bf9e55;width:34px;height:34px}\n.verse-panel .icon-button:hover {background:#ffffff12;border-color:#cfc39b}\n.verse-panel .icon {height:15px;width:15px}\n.verse-content {position:relative;min-height:215px;padding-top:41px;padding-bottom:20px}\n.quote-mark {font:70px/.5 var(--serif);color:#c6b589;position:absolute;top:37px;left:-4px;opacity:.65}\n.verse-content blockquote {font:italic 25px/1.45 var(--serif);color:#f3eee0;position:relative;z-index:1}\n.verse-content>p {font-size:10px;color:#ddc791;margin-top:22px}\n.verse-content>p span {color:#bcc5b3;font-size:8px;margin-left:6px;letter-spacing:.07em}\n.verse-controls {display:flex;justify-content:space-between;align-items:center;padding-top:15px;border-top:1px solid #b9bf9e44;gap:20px}\n.verse-dots {display:flex;gap:6px}\n.verse-dot {width:26px;height:32px;display:flex;align-items:center;justify-content:center;padding:0}\n.verse-dot::after {content:\"\";display:block;width:5px;height:5px;border-radius:50%;background:#9ba88e;transition:background .2s,width .2s}\n.verse-dot.active::after {width:21px;border-radius:5px;background:#d9c18b}\n.verse-arrows {display:flex;gap:8px}\n.rotate-arrow {transform:rotate(180deg)}\n.bible-section {border-bottom:1px solid var(--line)}\n.bible-home-grid {display:grid;grid-template-columns:1.2fr 1fr;gap:55px;align-items:center}\n.bible-library-card {display:flex;align-items:center;gap:26px;padding:27px;border:1px solid var(--line);background:var(--surface);min-width:0}\n.bible-cover {position:relative;flex-shrink:0;width:145px;height:205px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#344334;color:#eddbab;border-radius:2px 7px 7px 2px;box-shadow:5px 6px 0 #d7d1bd,7px 9px 18px #26332420;border-left:7px solid #263427;outline:1px solid #84907444;outline-offset:-12px}\n.bible-cover-cross {font:24px var(--serif);margin-bottom:12px}\n.bible-cover-title {font:32px/1.05 var(--serif);text-align:center;letter-spacing:-1px}\n.bible-cover-title em {font-size:40px;color:#eddbab}\n.bible-cover-edition {font-size:5px;letter-spacing:.15em;margin-top:22px}\n.bible-library-copy {min-width:0}\n.bible-library-copy .overline {font-size:7px;letter-spacing:.1em}\n.bible-library-copy h3 {font-size:28px;margin:12px 0;line-height:1.2;letter-spacing:-.6px}\n.bible-library-copy>p {font-size:11px;color:var(--muted);line-height:1.9}\n.bible-library-copy .button {font-size:10px;gap:15px;padding:12px 15px;min-height:46px;margin-top:20px}\n.bible-library-copy>.field-help {display:block;max-width:210px;margin-top:14px;font-size:9px}\n.bible-passages>.overline {font-size:8px;margin-bottom:13px}\n.bible-passage {display:flex;align-items:center;justify-content:space-between;gap:20px;width:100%;text-align:left;padding:16px 0;border-bottom:1px solid var(--line);color:var(--ink)}\n.bible-passage small {display:block;font-size:7px;letter-spacing:.13em;font-weight:500;color:var(--muted);margin-bottom:3px}\n.bible-passage strong {font:23px var(--serif);letter-spacing:-.4px}\n.bible-passage .icon {width:18px;height:18px;color:var(--gold);transition:transform .2s}\n.bible-passage:hover .icon {transform:translate(2px,-2px)}\n.bible-passage:hover strong {color:var(--gold)}\n.bible-attribution {margin-top:32px;color:var(--muted);font-size:9px;line-height:1.8}\n.bible-attribution summary {cursor:pointer;width:fit-content;padding:6px 0;color:var(--gold);font-size:10px}\n.bible-attribution>p {margin-block:12px;max-width:700px}\n.bible-attribution a {text-decoration:underline;text-underline-offset:3px}\n.bible-attribution pre {white-space:pre-wrap;overflow-wrap:anywhere;max-height:250px;overflow:auto;font:10px/1.8 var(--sans);padding:18px;border:1px solid var(--line);background:var(--surface)}\n.bible-dialog {width:min(850px,calc(100% - 32px));padding:26px;max-height:calc(100dvh - 32px)}\n.bible-dialog>.dialog-top {position:sticky;top:-26px;background:var(--surface);z-index:3;padding-block:10px;margin-top:-10px}\n.bible-reader-title {display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:24px}\n.bible-reader-title h2 {font-size:34px;letter-spacing:-1px}\n.bible-reader-title h2>span {display:block;margin-top:10px;font:8px var(--sans);letter-spacing:.15em;color:var(--gold)}\n.bible-font-tools {display:flex;gap:7px;flex-shrink:0}\n.bible-font-tools .icon-button {font:12px var(--sans);width:35px;height:35px}\n.bible-picker-row {display:grid;grid-template-columns:2fr 1fr;gap:16px}\n.bible-picker-row select {font-size:13px}\n.bible-search-form {display:flex;gap:10px;align-items:flex-end;margin-bottom:9px}\n.bible-search-form .field {flex:1;min-width:0;margin:0}\n.bible-search-form input {font-size:13px;min-height:45px}\n.bible-search-form .button {font-size:11px;padding:12px 16px;gap:16px;min-height:45px}\n.bible-reader-status {font-size:11px;color:var(--gold);margin-top:15px;min-height:19px}\n.bible-chapter-heading {display:flex;justify-content:space-between;align-items:center;gap:15px;padding-top:17px;margin-top:13px;border-top:1px solid var(--line)}\n.bible-chapter-heading h3 {font-size:27px;line-height:1.3;letter-spacing:-.6px;overflow-wrap:anywhere;min-width:0}\n.bible-chapter-heading .icon-button {width:34px;height:34px;flex-shrink:0}\n.bible-chapter-heading .icon {width:15px;height:15px}\n.bible-reader-content {position:relative;margin-top:17px;max-height:350px;height:36vh;min-height:180px;overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable;padding:5px 12px 6px 0;font:var(--bible-font-size,18px)/1.9 var(--serif);color:var(--ink)}\n.bible-verses {list-style:none;margin:0;padding:0}\n.bible-verses li {display:grid;grid-template-columns:30px minmax(0,1fr);gap:10px;padding:7px 7px 7px 0;border-radius:3px;overflow-wrap:anywhere}\n.bible-verses li.bible-highlight {background:var(--gold-soft);box-shadow:inset 2px 0 var(--gold)}\n.bible-verse-number {align-self:start;width:30px;min-height:32px;padding:3px 0;font:11px/2 var(--sans);color:var(--gold);border:1px solid transparent;border-radius:50%}\n.bible-verse-number:hover {border-color:var(--gold);background:var(--tint)}\n.bible-search-result {display:block;width:100%;padding:14px 10px;text-align:left;border-bottom:1px solid var(--line);font:inherit;line-height:1.65}\n.bible-search-result:hover {background:var(--tint)}\n.bible-search-result strong {display:block;font:11px var(--sans);font-weight:600;color:var(--gold);margin-bottom:7px}\n.bible-search-result span {display:block;overflow-wrap:anywhere}\n.bible-more {font-size:10px;min-height:40px;padding:9px 15px;margin-top:16px}\n.bible-no-results {font:14px/1.8 var(--sans);color:var(--muted);padding:18px 4px}\n.bible-reader-navigation {display:flex;align-items:center;justify-content:space-between;gap:15px;margin-top:18px;padding-top:14px;border-top:1px solid var(--line)}\n.bible-reader-navigation .text-link {font-size:10px;gap:9px}\n.bible-reader-note {font-size:9px;color:var(--muted);margin-top:14px}\n.bible-dialog button:disabled {cursor:default;opacity:.4}\n.contact-grid {display:grid;grid-template-columns:1fr 1.1fr;gap:78px;align-items:start}\n.contact-copy h2 {margin:13px 0 25px;font-size:54px}\n.contact-copy>p {font-size:12px;color:var(--muted);line-height:1.9;max-width:300px}\n.contact-blessing {display:flex;gap:14px;border-top:1px solid var(--line);margin-top:40px;padding-top:25px;max-width:300px}\n.contact-blessing .icon {color:var(--gold);margin-top:3px;width:18px;height:18px}\n.contact-blessing p {font:italic 18px/1.5 var(--serif);color:var(--ink)}\n.closing-note {position:relative;padding:39px;background:var(--surface);border:1px solid var(--line);min-height:320px;overflow:hidden}\n.closing-note .overline {font-size:8px;letter-spacing:.13em}\n.closing-note-mark {position:absolute;right:32px;top:29px;color:var(--gold);height:26px;width:26px;stroke-width:1}\n.closing-note h3 {font-size:39px;line-height:1.2;letter-spacing:-1.2px;margin:28px 0 22px}\n.closing-note>p {font-size:12px;color:var(--muted);max-width:350px;line-height:1.9}\n.closing-note .text-link {margin-top:23px;font-size:10px}\n.contact-form {padding:28px;background:var(--surface);border:1px solid var(--line)}\n.form-heading {display:flex;align-items:center;justify-content:space-between;margin-bottom:23px}\n.form-heading h3 {font-size:25px;letter-spacing:-.5px}\n.form-heading>span {color:var(--gold);font-size:24px}\n.form-row {display:grid;grid-template-columns:1fr 1fr;gap:17px}\n.field {display:flex;flex-direction:column;gap:7px;min-width:0;margin-bottom:16px}\nlabel {font-size:10px;font-weight:600;color:var(--ink)}\ninput, textarea, select {min-width:0;width:100%;padding:12px 13px;color:var(--ink);background:var(--paper);border:1px solid var(--line);font-size:11px;line-height:1.5}\ninput::placeholder,textarea::placeholder {color:var(--muted);opacity:.9}\ntextarea {resize:vertical;min-height:105px}\ninput:focus,textarea:focus,select:focus {outline:2px solid var(--gold);outline-offset:1px;border-color:var(--gold)}\n[aria-invalid=\"true\"] {border-color:#ad604b}\n.label-row {display:flex;justify-content:space-between;gap:8px;align-items:center}\n.label-row>span {font-size:8px;color:var(--muted)}\n.field-error {font-size:10px;line-height:1.5;color:#99513f}\n[data-theme=\"dark\"] .field-error {color:#ecae95}\n.field-error:empty {display:none}\n.form-note {color:var(--muted);font-size:9px;line-height:1.8;margin:3px 0 20px}\n.form-actions {display:flex;align-items:center;gap:18px;flex-wrap:wrap}\n.form-actions .button {font-size:10px;padding:12px 18px;min-height:46px}\n.form-actions .text-link {font-size:10px}\n.form-status {font-size:11px;color:var(--gold);line-height:1.7;overflow-wrap:anywhere}\n.form-status:not(:empty) {margin-top:15px}\n.site-footer {background:var(--tint);border-top:1px solid var(--line)}\n.footer-top {display:flex;justify-content:space-between;align-items:center;gap:30px;padding-block:38px;border-bottom:1px solid var(--line)}\n.footer-top>p {font:italic 21px var(--serif);color:var(--ink)}\n.footer-top .text-link {font-size:9px}\n.footer-bottom {display:flex;justify-content:space-between;align-items:center;gap:20px;padding-block:20px;font-size:8px;color:var(--muted)}\n.footer-bottom>p>span[aria-hidden] {margin-left:5px;color:var(--gold)}\n.personalize-button {display:flex;align-items:center;gap:7px;font-size:9px;padding:7px 0;color:var(--muted)}\n.personalize-button:hover {color:var(--ink);text-decoration:underline;text-underline-offset:4px}\n.personalize-button .icon {width:13px;height:13px}\n.back-to-top {position:fixed;bottom:24px;right:24px;z-index:35;color:var(--ink);background:var(--surface);box-shadow:0 4px 15px #0000000a}\n.back-to-top .icon {width:17px;height:17px}\n.toast {position:fixed;left:50%;bottom:25px;transform:translateX(-50%);z-index:1000;max-width:min(440px,calc(100% - 40px));width:max-content;background:var(--ink);color:var(--paper);padding:13px 22px;box-shadow:var(--shadow);font-size:12px;border:1px solid var(--line)}\ndialog {position:fixed;background:var(--surface);color:var(--text);border:1px solid var(--line);box-shadow:0 30px 120px #0003;padding:30px;max-height:calc(100dvh - 48px);overflow-y:auto;overscroll-behavior:contain;margin:auto;width:min(600px,calc(100% - 32px))}\ndialog::backdrop {background:#162117a6;backdrop-filter:blur(5px)}\ndialog[open] {animation:dialog-in .2s var(--ease)}\n@keyframes dialog-in {from {opacity:0;transform:translateY(10px)}to {opacity:1;transform:translateY(0)}}\n.dialog-top {display:flex;justify-content:space-between;align-items:center;gap:18px;margin-bottom:17px}\n.dialog-top .overline {font-size:8px}\n.dialog-top .icon-button {width:36px;height:36px;flex-shrink:0}\n.detail-dialog h2 {font-size:36px;margin:19px 0 20px;overflow-wrap:anywhere}\n.detail-art:empty {display:none}\n.detail-art .work-art {height:200px;margin:0}\n.detail-status {font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);margin:-8px 0 20px}\n.detail-body p {font-size:13px;color:var(--muted);margin:0 0 17px;white-space:pre-line;overflow-wrap:anywhere}\n.goal-list {list-style:none;padding:0;margin:24px 0 8px;counter-reset:goal}\n.goal-list li {display:grid;grid-template-columns:34px minmax(0,1fr);gap:15px;padding:21px 0;border-top:1px solid var(--line);counter-increment:goal}\n.goal-list li::before {content:counter(goal,decimal-leading-zero);display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--line);border-radius:50%;color:var(--gold);font:italic 14px var(--serif)}\n.goal-list h3 {font-size:23px;line-height:1.25;letter-spacing:-.4px}\n.goal-list p {margin:8px 0 0;line-height:1.8}\n.detail-dialog>.button {margin-top:10px}\n.detail-contact {display:flex;margin-top:15px}\n.editor-dialog {width:min(740px,calc(100% - 32px));padding:30px 34px}\n.editor-dialog h2 {font-size:38px}\n.editor-intro {font-size:12px;color:var(--muted);margin-top:13px;max-width:550px}\n.editor-section {padding-top:27px}\n.editor-section h3 {font-family:var(--sans);font-size:13px;font-weight:600;border-bottom:1px solid var(--line);padding-bottom:14px;margin-bottom:20px}\n.editor-section .field input,.editor-section .field textarea {font-size:12px}\n.optional {font-weight:400;color:var(--muted)}\n.field-help {font-size:10px;color:var(--muted);line-height:1.7}\n.photo-controls .text-link {font-size:10px}\n.photo-controls input[type=\"file\"] {padding:10px}\ninput::file-selector-button {border:1px solid var(--line);padding:6px 9px;background:var(--surface);color:var(--ink);font:inherit;margin-right:12px;cursor:pointer}\n.project-editor {min-width:0;margin:17px 0;padding:18px;border:1px solid var(--line)}\n.project-editor legend {font-size:11px;color:var(--gold);padding:0 7px}\n.project-editor .form-row {grid-template-columns:1.2fr 1fr}\n.remove-project {font-size:10px;color:var(--muted);text-decoration:underline;text-underline-offset:4px;padding:5px 0}\n.remove-project:hover {color:var(--gold)}\n.editor-footer {position:sticky;bottom:-31px;display:flex;gap:11px;flex-wrap:wrap;padding:20px 0;background:var(--surface);border-top:1px solid var(--line);margin-top:24px;z-index:1}\n.editor-footer .button {font-size:10px;gap:12px;padding:12px 15px}\n.editor-feedback {font-size:11px;color:var(--gold);margin-top:20px}\n.editor-feedback:empty {display:none}\n.editor-footnote {font-size:9px;color:var(--muted);border-top:1px solid var(--line);padding-top:16px;margin-top:7px}\n.will-reveal {opacity:0;transform:translateY(17px);transition:opacity .65s var(--ease),transform .65s var(--ease)}\n.will-reveal.is-visible {opacity:1;transform:none}\n@media(min-width:1500px) {.hero {min-height:740px}}\n@media(max-width:1100px) {\n  .shell {width:calc(100% - 72px)}\n  .main-nav {gap:20px}\n  .hero {gap:50px;grid-template-columns:1.12fr 1fr;min-height:650px}\n  h1 {font-size:65px}\n  .heading-spark {left:255px;width:34px;height:34px}\n  .hero-visual {padding-inline:17px}\n  .portrait-arch {height:280px;width:82%}\n  .portrait-stage {min-height:362px}\n  .orbit-spark {right:-26px;width:57px;height:57px}\n  .little-note {left:-35px;bottom:68px;width:116px;padding:13px;font-size:15px}\n  .about-grid {gap:55px}\n  .about-statement {padding:35px 30px}\n  .about-statement h2 {font-size:35px}\n  .faith-grid,.contact-grid {gap:46px}\n  .faith-copy h2 {font-size:39px}\n  .work-art {height:220px}\n  .work-card h3 {font-size:22px}\n  .work-content {padding:20px 16px}\n  .contact-form {padding:24px}\n  .bible-home-grid {gap:30px}\n  .bible-library-card {padding:22px;gap:20px}\n  .bible-cover {width:122px;height:185px}\n  .bible-library-copy h3 {font-size:25px}\n}\n@media(max-width:850px) {\n  .shell {width:calc(100% - 48px)}\n  .header-inner {height:76px;gap:10px}\n  .brand {font-size:31px}\n  .main-nav {gap:17px}\n  .main-nav a {font-size:10px}\n  .header-actions {margin-left:3px}\n  .hero {gap:30px;min-height:620px;padding-top:35px}\n  h1 {font-size:56px;letter-spacing:-2.8px}\n  .heading-spark {left:220px;width:29px;height:29px}\n  .hero .eyebrow {font-size:8px;letter-spacing:.1em;gap:9px}\n  .hero-intro,.hero-description {font-size:12px}\n  .hero-ctas {gap:18px}\n  .hero-ctas .button {padding:12px 16px;font-size:10px;gap:15px}\n  .hero-ctas .text-link {font-size:10px}\n  .visual-caption {font-size:6px;letter-spacing:.08em}\n  .portrait-stage {min-height:330px}\n  .portrait-arch {height:252px;width:85%}\n  .monogram {font-size:125px}\n  .little-note {width:102px;font-size:13px;left:-22px;bottom:59px}\n  .little-note .icon {margin-bottom:8px;width:16px;height:16px}\n  .portrait-signature {font-size:21px;bottom:9px}\n  .portrait-kicker {font-size:6px}\n  .values-inner {gap:18px}\n  .values-inner>span {font-size:16px}\n  .values-inner p {font-size:9px}\n  .values-inner b {margin-right:7px;font-size:8px}\n  .section {padding-block:72px}\n  .about-grid {gap:32px}\n  .about-statement {padding:32px 26px;min-height:400px}\n  .about-statement h2 {font-size:31px}\n  .about-copy h3 {font-size:36px}\n  .body-large {font-size:13px}\n  h2 {font-size:42px}\n  .section-heading {gap:25px}\n  .section-heading>p {font-size:11px;max-width:270px}\n  .journey-grid {gap:23px}\n  .journey-card>p {font-size:11px;min-height:84px}\n  .portfolio-grid {gap:15px}\n  .work-art {height:185px}\n  .art-paper {width:100px;height:137px}\n  .art-paper span {font-size:21px}\n  .art-paper .icon {width:32px;height:32px}\n  .art-grid {grid-template-columns:repeat(3,36px);grid-template-rows:repeat(3,36px);gap:6px}\n  .art-arch {width:115px;height:139px}\n  .art-arch::after {left:36px;top:22px;width:36px;height:36px}\n  .work-content {padding:19px 13px}\n  .work-card h3 {font-size:21px}\n  .work-card p {font-size:10px}\n  .faith-grid,.contact-grid {gap:28px}\n  .faith-copy h2 {font-size:35px}\n  .verse-panel {padding:20px}\n  .verse-content blockquote {font-size:23px}\n  .contact-copy h2 {font-size:44px}\n  .contact-form {padding:22px 18px}\n  .contact-form .form-row {grid-template-columns:1fr;gap:0}\n  .footer-top {gap:18px}\n  .footer-top>p {font-size:19px}\n  .bible-home-grid {gap:25px;grid-template-columns:1.2fr 1fr}\n  .bible-library-card {padding:20px;gap:18px}\n  .bible-cover {width:95px;height:162px}\n  .bible-cover-title {font-size:27px}\n  .bible-cover-title em {font-size:33px}\n  .bible-cover-cross {font-size:21px}\n  .bible-cover-edition {font-size:4px;letter-spacing:.1em;margin-top:16px}\n  .bible-library-copy .overline {font-size:6px}\n  .bible-library-copy h3 {font-size:23px}\n  .bible-library-copy .button {font-size:9px;gap:10px;padding:10px 11px}\n}\n@media(max-width:680px) {\n  html {scroll-padding-top:83px}\n  .shell {width:calc(100% - 40px)}\n  .header-inner {height:70px}\n  .site-header {border-bottom-color:var(--line)}\n  .brand {font-size:30px}\n  .header-actions {margin:0;gap:6px}\n  .menu-toggle {display:inline-flex;width:35px;height:35px;border-color:transparent}\n  .main-nav {display:none;position:absolute;top:70px;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;margin:0;padding:16px 25px 22px;background:var(--surface);border-bottom:1px solid var(--line);box-shadow:0 14px 28px #00000010}\n  .main-nav.open {display:flex}\n  .main-nav a,.main-nav a:last-child {font-size:14px;padding:12px 8px;margin:0}\n  .main-nav a::after {bottom:7px;right:auto;width:24px;left:8px}\n  .main-nav a:last-child span {float:right}\n  .nav-backdrop {position:fixed;inset:70px 0 0;z-index:45;background:#1b271d55;backdrop-filter:blur(2px);padding:0}\n  .hero {display:flex;flex-direction:column;align-items:stretch;gap:54px;padding-top:43px;padding-bottom:83px;min-height:0}\n  .hero-copy {max-width:460px}\n  .hero .eyebrow {font-size:8px;margin-bottom:22px}\n  h1 {font-size:clamp(42px,12.3vw,66px);letter-spacing:-3px;line-height:1.06}\n  .heading-spark {left:240px;bottom:5px;height:32px;width:32px}\n  .hero-intro {font-size:13px;margin-top:31px}\n  .hero-description {font-size:13px;max-width:320px}\n  .hero-ctas {margin-top:25px;gap:22px}\n  .hero-ctas .button {padding:14px 19px;font-size:11px}\n  .hero-ctas .text-link {font-size:11px}\n  .hero-note {font-size:9px;margin-top:23px}\n  .hero-visual {width:min(360px,calc(100% - 28px));margin:0 auto;padding:18px 19px 0}\n  .visual-caption {font-size:6px;letter-spacing:.13em}\n  .portrait-stage {min-height:345px;padding-top:25px}\n  .portrait-arch {width:78%;height:270px}\n  .monogram {font-size:133px}\n  .orbit-spark {right:-35px;top:0;width:60px;height:60px}\n  .little-note {left:-32px;bottom:53px;padding:15px;width:119px;font-size:15px}\n  .little-note .icon {margin-bottom:11px}\n  .portrait-signature {font-size:19px;bottom:4px}\n  .portrait-kicker {font-size:7px}\n  .visual-bottom {padding:15px 0}\n  .scroll-cue {bottom:23px;font-size:9px}\n  .values-inner {display:grid;grid-template-columns:1fr 1fr;gap:13px;padding-block:21px}\n  .values-inner>span {font-size:16px}\n  .values-inner p {font-size:9px}\n  .values-inner b {margin-right:12px}\n  .section {padding-block:57px}\n  .section-eyebrow {font-size:8px;letter-spacing:.08em;margin-bottom:29px;padding-bottom:15px}\n  .section-eyebrow>span+span {display:none}\n  .about-grid {grid-template-columns:1fr;gap:35px}\n  .about-statement {padding:33px;min-height:340px}\n  .about-statement h2 {font-size:37px;margin-top:25px}\n  .about-statement p {margin-top:26px}\n  .about-copy h3 {font-size:37px}\n  .body-large {font-size:14px}\n  .about-tags {margin-top:20px}\n  .section-heading {flex-direction:column;align-items:flex-start;gap:22px;margin-bottom:29px}\n  h2 {font-size:39px;letter-spacing:-1.5px}\n  .section-heading>p {font-size:12px;max-width:none}\n  .journey-grid {grid-template-columns:1fr;gap:30px}\n  .journey-card {position:relative;padding:25px 0 0 61px;border-top:1px solid var(--line)}\n  .step-line {position:absolute;left:0;top:25px;width:40px;border:0;padding:0;flex-direction:column;gap:24px;margin:0}\n  .step-number {font-size:31px}\n  .step-line .icon {width:20px;height:20px}\n  .journey-card h3 {font-size:30px;margin-block:7px 11px}\n  .journey-card>p {font-size:12px;min-height:0;max-width:none}\n  .journey-card .text-link {margin-top:16px}\n  .portfolio-tools {align-items:flex-start;gap:12px;flex-direction:column}\n  .filter-group {gap:3px}\n  .filter-button {font-size:9px;padding:8px 11px}\n  .portfolio-grid {grid-template-columns:1fr;gap:23px}\n  .work-art {height:255px;margin:9px 9px 0}\n  .art-label {font-size:8px}\n  .art-paper {width:134px;height:177px}\n  .art-paper span {font-size:26px}\n  .art-paper .icon {width:42px;height:42px}\n  .art-grid {grid-template-columns:repeat(3,47px);grid-template-rows:repeat(3,47px);gap:8px}\n  .art-arch {width:142px;height:176px}\n  .art-arch::after {left:49px;top:30px;width:44px;height:44px}\n  .work-content {padding:21px 21px 23px}\n  .work-card h3 {font-size:27px}\n  .work-card p {font-size:12px}\n  .work-meta {font-size:9px}\n  .work-card .text-link {font-size:11px;padding-top:22px}\n  .faith-grid {grid-template-columns:1fr;gap:29px}\n  .faith-copy h2 {font-size:39px}\n  .faith-copy>p:not(.eyebrow) {font-size:12px}\n  .faith-mark {display:none}\n  .verse-panel {padding:24px}\n  .verse-content {min-height:214px}\n  .verse-content blockquote {font-size:26px}\n  .contact-grid {grid-template-columns:1fr;gap:34px}\n  .contact-copy h2 {font-size:46px;margin-top:0}\n  .contact-copy>p {max-width:360px}\n  .closing-note {padding:28px;min-height:300px}\n  .closing-note h3 {font-size:35px}\n  .bible-home-grid {grid-template-columns:1fr;gap:30px}\n  .bible-library-card {padding:23px;gap:23px}\n  .bible-cover {width:114px;height:177px}\n  .bible-library-copy h3 {font-size:25px}\n  .bible-library-copy>p {font-size:11px}\n  .bible-library-copy .button {font-size:10px;padding:10px 12px;gap:12px}\n  .bible-library-copy>.field-help {font-size:9px}\n  .bible-library-copy .overline {font-size:7px}\n  .bible-dialog {padding:20px}\n  .bible-dialog>.dialog-top {top:-20px}\n  .bible-dialog .dialog-top .overline {font-size:7px;letter-spacing:.1em}\n  .bible-reader-title h2 {font-size:29px}\n  .bible-reader-title {gap:10px}\n  .bible-font-tools {gap:5px}\n  .bible-font-tools .icon-button {height:30px;width:30px;font-size:11px}\n  .bible-search-form {gap:8px}\n  .bible-search-form .button {min-height:50px;padding:12px;gap:8px}\n  .bible-search-form .icon {width:14px;height:14px}\n  .bible-search-form input {min-height:50px}\n  .bible-picker-row {grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:12px}\n  .bible-reader-content {height:32vh;min-height:170px;padding-right:6px}\n  .bible-chapter-heading h3 {font-size:25px}\n  .bible-reader-navigation .text-link {font-size:9px;gap:6px}\n  .bible-reader-note {font-size:9px}\n  .contact-blessing {margin-top:25px;max-width:none;padding-top:21px}\n  .contact-blessing p {font-size:17px}\n  .contact-form {padding:23px}\n  .contact-form .form-row {grid-template-columns:1fr;gap:0}\n  .contact-form input {font-size:11px}\n  input,textarea,select {font-size:16px!important}\n  .form-note {font-size:10px}\n  .footer-top {flex-wrap:wrap;padding-block:29px;gap:18px}\n  .footer-top>p {font-size:18px}\n  .footer-top>.text-link {width:100%;font-size:10px}\n  .footer-bottom {display:grid;grid-template-columns:1fr;gap:9px;font-size:9px;padding-block:22px}\n  .personalize-button {padding-top:8px;font-size:10px}\n  .back-to-top {bottom:18px;right:17px;width:37px;height:37px}\n  dialog {padding:23px;max-height:calc(100dvh - 30px)}\n  .detail-dialog h2 {font-size:31px}\n  .editor-dialog {padding:23px}\n  .editor-dialog h2 {font-size:33px}\n  .editor-intro {font-size:11px}\n  .editor-dialog .form-row {grid-template-columns:1fr;gap:0}\n  .editor-dialog textarea {font-size:14px!important}\n  .editor-dialog input {font-size:14px!important}\n  .editor-footer {bottom:-24px;padding:15px 0;display:grid;grid-template-columns:1fr;gap:8px}\n  .editor-footer .button {font-size:11px;min-height:43px}\n  .project-editor {padding:14px}\n}\n@media(max-width:365px) {\n  .shell {width:calc(100% - 32px)}\n  .hero-ctas {gap:15px}\n  .hero-ctas .button {padding-inline:14px;gap:13px}\n  .heading-spark {left:217px}\n  .filter-button {padding-inline:8px;font-size:8px}\n  .contact-form .form-row {grid-template-columns:1fr;gap:0}\n  .about-statement {padding:27px}\n  .about-statement h2 {font-size:33px}\n  .little-note {left:-25px;width:109px;font-size:14px}\n  .bible-library-card {padding:18px;gap:17px}\n  .bible-cover {width:92px;height:158px}\n  .bible-library-copy h3 {font-size:23px}\n  .bible-library-copy .button {font-size:9px;padding:10px;gap:8px}\n  .bible-dialog .dialog-top .overline {letter-spacing:.02em}\n}\n@media(prefers-reduced-motion:reduce) {\n  html {scroll-behavior:auto}\n  *,*::before,*::after {animation:none!important;transition:none!important}\n  .will-reveal {opacity:1;transform:none}\n}\n@media print {\n  .site-header,.scroll-cue,.hero-ctas,.portfolio-tools,.text-link,.contact-form,.back-to-top,.personalize-button,.toast,dialog,.verse-controls,.verse-top button {display:none!important}\n  body {background:white;color:#333;font-size:12px}\n  .shell {width:100%}\n  .section {padding-block:30px}\n  .hero {min-height:0;padding-block:20px;gap:40px}\n  .hero-visual {break-inside:avoid;max-width:300px}\n  h1 {font-size:50px}\n  h2 {font-size:32px}\n  .work-card,.journey-card,.verse-panel {break-inside:avoid}\n  .will-reveal {opacity:1;transform:none}\n  .site-footer {margin-top:20px}\n}\n";
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const root = document.documentElement;
  const categories = { creative: 'Creative works', projects: 'Projects', goals: 'Future goals' };
  const clampText = (value, max, fallback = '') => typeof value === 'string' ? value.trim().slice(0, max) : fallback;
  const safeStorage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); return true; } catch { return false; } }
  };
  const safeUrl = value => {
    try { const url = new URL(String(value)); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  };
  function normalize(data) {
    const value = data && typeof data === 'object' ? data : {};
    const ids = new Set();
    return {
      siteId: clampText(value.siteId, 80, 'jiandra-portfolio-v2'),
      name: clampText(value.name, 80, 'Jiandra Louise F. De Jesus') || 'Jiandra Louise F. De Jesus',
      initials: clampText(value.initials, 4, 'J.') || 'J.',
      tagline: clampText(value.tagline, 200, 'A journey of faith, creativity, growth, and purpose.'),
      bio: clampText(value.bio, 700),
      mission: clampText(value.mission, 500),
      photo: value.photoOptOut !== true && typeof value.photo === 'string' && value.photo.length < 8000000 && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(value.photo) ? value.photo : '',
      photoOptOut: value.photoOptOut === true,
      projects: (Array.isArray(value.projects) ? value.projects : []).slice(0, 12).filter(item => item && typeof item === 'object').map((item, index) => {
        let id = clampText(item.id, 70, `project-${index}`);
        if (ids.has(id) || !id) id = `project-${index}-${Date.now()}`;
        ids.add(id);
        return {
          id,
          category: Object.hasOwn(categories, item.category) ? item.category : 'projects',
          title: clampText(item.title, 70, 'Untitled project') || 'Untitled project',
          summary: clampText(item.summary, 200),
          details: clampText(item.details, 2400),
          status: clampText(item.status, 60, 'In progress'),
          url: safeUrl(item.url)
        };
      })
    };
  }

  let embedded;
  try { embedded = normalize(JSON.parse($('#portfolio-config').textContent)); }
  catch { embedded = normalize({}); }
  const storageKey = `${embedded.siteId}:content`;
  const themeKey = `${embedded.siteId}:theme`;
  let config = embedded;
  try {
    const stored = safeStorage.get(storageKey);
    if (stored) config = normalize({ ...embedded, ...JSON.parse(stored), siteId: embedded.siteId });
  } catch { /* A damaged saved preference must never prevent the page from opening. */ }
  if (config.name === 'Jiandra F. De Jesus' && embedded.name === 'Jiandra Louise F. De Jesus') config.name = embedded.name;
  if (!config.photo && !config.photoOptOut && embedded.photo) config.photo = embedded.photo;

  // Refresh only the original goals placeholder; retain the visitor's own edits.
  const legacyGoalDetails = 'To keep learning, create meaningful works, and use my gifts to inspire others.\n\nMy hope is to grow with intention, stay grounded in faith, and make room for the possibilities ahead.';
  const currentGoals = embedded.projects.find(project => project.id === 'goals');
  if (currentGoals) config.projects = config.projects.map(project => {
    if (project.id !== 'goals' || project.details !== legacyGoalDetails) return project;
    return { ...project, summary: currentGoals.summary, details: currentGoals.details, status: currentGoals.status };
  });

  let filter = 'all';
  let verseIndex = 0;
  let toastTimer;
  let draftProjects = [];
  let draftPhoto = '';
  let draftPhotoOptOut = false;
  let photoLoading = false;
  let editorDirty = false;
  const detailDialog = $('#detail-dialog');
  const editorDialog = $('#editor-dialog');
  const editorForm = $('#editor-form');
  const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  function svg(name, extra = '') {
    return `<svg class="icon ${extra}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  }
  function toast(message) {
    const node = $('#toast');
    clearTimeout(toastTimer);
    node.textContent = message;
    node.hidden = false;
    toastTimer = setTimeout(() => { node.hidden = true; }, 4200);
  }
  function download(content, filename, type = 'text/plain;charset=utf-8') {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
  }
  async function copyText(text, message = 'Verse copied. A little encouragement to share.') {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.append(area);
        const focused = document.activeElement;
        area.select();
        const copied = document.execCommand('copy');
        area.remove();
        if (focused && focused.focus) focused.focus({ preventScroll: true });
        if (!copied) throw new Error('Clipboard unavailable');
      }
      toast(message);
    } catch { toast('Your browser blocked copying. You can select and copy the text instead.'); }
  }

  // Theme: remember the choice, and follow the system until the visitor chooses.
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let explicitTheme = safeStorage.get(themeKey);
  function applyTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    $('#theme').setAttribute('aria-pressed', String(dark));
    $('#theme').setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    $('#theme').innerHTML = svg(dark ? 'sun' : 'moon');
    $('meta[name="theme-color"]').content = dark ? '#1c241f' : '#f7f5ef';
  }
  applyTheme(explicitTheme === 'dark' || explicitTheme === 'light' ? explicitTheme : systemTheme.matches ? 'dark' : 'light');
  $('#theme').addEventListener('click', () => {
    explicitTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(explicitTheme);
    safeStorage.set(themeKey, explicitTheme);
  });
  systemTheme.addEventListener('change', event => { if (!explicitTheme) applyTheme(event.matches ? 'dark' : 'light'); });

  // Mobile navigation, including keyboard and backdrop handling.
  const menuButton = $('#menu-toggle');
  const navigation = $('#nav');
  const mobileMedia = matchMedia('(max-width:680px)');
  let menuOpen = false;
  function setMenu(open, restoreFocus = false) {
    menuOpen = open && mobileMedia.matches;
    navigation.classList.toggle('open', menuOpen);
    menuButton.setAttribute('aria-expanded', String(menuOpen));
    menuButton.setAttribute('aria-label', menuOpen ? 'Close navigation' : 'Open navigation');
    menuButton.innerHTML = svg(menuOpen ? 'close' : 'menu');
    $('#nav-backdrop').hidden = !menuOpen;
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => setMenu(!menuOpen));
  $('#nav-backdrop').addEventListener('click', () => setMenu(false, true));
  mobileMedia.addEventListener('change', () => setMenu(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuOpen) setMenu(false, true);
  });
  document.addEventListener('focusin', event => {
    if (menuOpen && !$('#site-header').contains(event.target)) setMenu(false);
  });
  $$('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    if (menuOpen) {
      setMenu(false);
      const section = document.getElementById(link.hash.slice(1));
      if (section) {
        section.setAttribute('tabindex', '-1');
        section.focus({ preventScroll: true });
      }
    }
  }));

  const sections = $$('main > section, main > section > .shell').filter(node => node.id);
  const navLinks = $$('#nav a');
  function updateScroll() {
    const distance = Math.max(1, root.scrollHeight - innerHeight);
    $('#scroll-progress').style.transform = `scaleX(${Math.min(1, Math.max(0, scrollY / distance))})`;
    $('#site-header').classList.toggle('scrolled', scrollY > 12);
    $('#back-to-top').hidden = scrollY < 550;
    const marker = innerHeight * .34;
    let active = sections[0] && sections[0].id;
    sections.forEach(section => { if (section.getBoundingClientRect().top < marker) active = section.id; });
    if (scrollY + innerHeight >= root.scrollHeight - 25) active = 'contact';
    navLinks.forEach(link => {
      const selected = link.hash === `#${active}`;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
  }
  let scrolling = false;
  window.addEventListener('scroll', () => {
    if (!scrolling) requestAnimationFrame(() => { updateScroll(); scrolling = false; });
    scrolling = true;
  }, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });
  window.addEventListener('load', updateScroll);

  // Visuals are native CSS/SVG, so there are no missing photos or remote assets.
  function artwork(category, index = 0) {
    const node = document.createElement('div');
    node.className = `work-art ${category}`;
    node.setAttribute('aria-hidden', 'true');
    const art = category === 'creative'
      ? `<div class="art-paper">${svg('spark')}<span>create.</span></div>`
      : category === 'projects'
        ? `<div class="art-grid">${'<span></span>'.repeat(9)}</div>`
        : '<div class="art-arch"></div>';
    node.innerHTML = `<span class="art-label">${categories[category].toUpperCase()}</span>${art}<span class="art-number">${String(index + 1).padStart(2, '0')}</span>`;
    return node;
  }
  function renderProjects() {
    const grid = $('#portfolio-grid');
    grid.replaceChildren();
    const visible = config.projects.filter(project => filter === 'all' || project.category === filter);
    visible.forEach(project => {
      const article = document.createElement('article');
      article.className = 'work-card';
      article.append(artwork(project.category, config.projects.indexOf(project)));
      const content = document.createElement('div');
      content.className = 'work-content';
      const meta = document.createElement('div');
      meta.className = 'work-meta';
      const status = document.createElement('span');
      status.textContent = project.status || categories[project.category];
      const dot = document.createElement('span');
      dot.setAttribute('aria-hidden', 'true');
      meta.append(status, dot);
      const title = document.createElement('h3');
      title.textContent = project.title;
      const summary = document.createElement('p');
      summary.textContent = project.summary;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'text-link';
      button.setAttribute('aria-label', `Explore ${project.title}`);
      button.innerHTML = `${project.category === 'goals' ? 'View my future goals' : 'Take a closer look'} ${svg('diagonal')}`;
      button.addEventListener('click', () => openProject(project));
      content.append(meta, title, summary, button);
      article.append(content);
      grid.append(article);
    });
    $('#portfolio-empty').hidden = visible.length !== 0;
    $('#result-count').textContent = `${visible.length} ${visible.length === 1 ? 'collection' : 'collections'}`;
  }
  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    $$('.filter-button').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderProjects();
  }));

  function setDetail(title, text, kicker) {
    $('#detail-title').textContent = title;
    $('#detail-kicker').textContent = kicker;
    $('#detail-art').replaceChildren();
    $('#detail-status').hidden = true;
    $('#detail-link').hidden = true;
    $('#detail-link').removeAttribute('href');
    const body = $('#detail-body');
    body.replaceChildren();
    text.split(/\n\s*\n/).filter(Boolean).forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      body.append(p);
    });
  }
  function openProject(project) {
    setDetail(project.title, project.details || project.summary, categories[project.category]);
    if (project.category === 'goals') {
      const list = document.createElement('ol');
      list.className = 'goal-list';
      (project.details || project.summary).split(/\n\s*\n/).filter(Boolean).forEach(block => {
        const item = document.createElement('li');
        const content = document.createElement('div');
        const [title, ...lines] = block.split('\n');
        if (lines.length) {
          const heading = document.createElement('h3');
          heading.textContent = title;
          content.append(heading);
        }
        const description = document.createElement('p');
        description.textContent = lines.length ? lines.join('\n') : title;
        content.append(description);
        item.append(content);
        list.append(item);
      });
      $('#detail-body').replaceChildren(list);
    } else {
      $('#detail-art').append(artwork(project.category, config.projects.indexOf(project)));
    }
    if (project.status) {
      $('#detail-status').textContent = project.status;
      $('#detail-status').hidden = false;
    }
    if (project.url) {
      $('#detail-link').href = project.url;
      $('#detail-link').hidden = false;
    }
    detailDialog.showModal();
    detailDialog.scrollTop = 0;
  }
  const reflections = {
    dreams: { title: 'It begins with a dream.', text: 'Every journey begins with a dream. It does not have to be loud or fully formed to matter. Sometimes, the first step is simply believing that your story has something meaningful to offer.\n\nA little faith can make room for a new beginning. Keep the hope. Take the next small step.' },
    growth: { title: 'Grace for the becoming.', text: 'Growth is a daily practice of learning, improving, and becoming better. It is found in the courage to try again, the openness to learn, and the patience to begin where you are.\n\nProgress does not always look impressive. Small, steady steps still move the story forward.' },
    purpose: { title: 'Let the little things matter.', text: 'Purpose grows through the ways we use our gifts to inspire others. Meaningful work can begin with a kind word, a thoughtful idea, or a simple act done with care.\n\nKeep creating. Keep growing. Let faith guide the way you show up for the world.' }
  };
  $$('[data-reflection]').forEach(button => button.addEventListener('click', () => {
    const item = reflections[button.dataset.reflection];
    setDetail(item.title, item.text, 'A LITTLE REFLECTION');
    detailDialog.showModal();
    detailDialog.scrollTop = 0;
  }));
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $$('dialog').forEach(dialog => dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  }));

  // Manual verse carousel. No timer moves content while someone is reading.
  const verses = [
    { text: 'I can do all things through Christ which strengtheneth me.', reference: 'Philippians 4:13' },
    { text: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.', reference: 'Jeremiah 29:11' },
    { text: 'Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.', reference: 'Matthew 5:16' }
  ];
  function showVerse(index) {
    verseIndex = (index + verses.length) % verses.length;
    const verse = verses[verseIndex];
    $('#verse-text').textContent = verse.text;
    const reference = $('#verse-reference');
    reference.replaceChildren(document.createTextNode(`${verse.reference} `));
    const translation = document.createElement('span');
    translation.textContent = '— KJV';
    reference.append(translation);
    $$('[data-verse]').forEach(button => {
      const active = Number(button.dataset.verse) === verseIndex;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  $('#previous-verse').addEventListener('click', () => showVerse(verseIndex - 1));
  $('#next-verse').addEventListener('click', () => showVerse(verseIndex + 1));
  $$('[data-verse]').forEach(button => button.addEventListener('click', () => showVerse(Number(button.dataset.verse))));
  $('#copy-verse').addEventListener('click', () => copyText(`“${verses[verseIndex].text}” — ${verses[verseIndex].reference} (KJV)`));

  // The complete KJV is bundled in the page: no API, account, or connection is needed.
  const bibleDialog = $('#bible-dialog');
  const bibleContent = $('#bible-reader-content');
  const bibleBookPicker = $('#bible-book');
  const bibleChapterPicker = $('#bible-chapter');
  const bibleStateKey = `${embedded.siteId}:bible`;
  let bibleData = null;
  let bibleCursor = { book: 18, chapter: 22, font: 18 };
  let bibleResults = [];
  let bibleResultsShown = 0;
  try {
    const saved = JSON.parse(safeStorage.get(bibleStateKey));
    if (saved && Number.isInteger(saved.book) && saved.book >= 0 && saved.book < 66 && Number.isInteger(saved.chapter) && saved.chapter >= 0 && saved.chapter < 150) {
      bibleCursor = { book: saved.book, chapter: saved.chapter, font: Number.isFinite(saved.font) ? Math.max(16, Math.min(24, saved.font)) : 18 };
    }
  } catch { /* Reading preferences are optional. */ }

  function ensureBible() {
    if (bibleData) return true;
    try {
      bibleData = JSON.parse($('#bible-data').textContent);
      if (!Array.isArray(bibleData.books) || bibleData.books.length !== 66) throw new Error('Missing Bible text');
      bibleBookPicker.replaceChildren();
      const oldTestament = document.createElement('optgroup');
      oldTestament.label = 'Old Testament';
      const newTestament = document.createElement('optgroup');
      newTestament.label = 'New Testament';
      bibleData.books.forEach((book, index) => {
        const option = document.createElement('option');
        option.value = String(index);
        option.textContent = book.name;
        (index < 39 ? oldTestament : newTestament).append(option);
      });
      bibleBookPicker.append(oldTestament, newTestament);
      bibleCursor.chapter = Math.min(bibleCursor.chapter, bibleData.books[bibleCursor.book].chapters.length - 1);
      return true;
    } catch {
      bibleData = null;
      toast('The Bible text could not be opened. Please use the complete downloaded HTML or ZIP.');
      return false;
    }
  }
  function rememberBible() { safeStorage.set(bibleStateKey, JSON.stringify(bibleCursor)); }
  function applyBibleFont() {
    bibleContent.style.setProperty('--bible-font-size', `${bibleCursor.font}px`);
    $('#bible-smaller').disabled = bibleCursor.font <= 16;
    $('#bible-larger').disabled = bibleCursor.font >= 24;
  }
  function renderBibleChapter(highlight = null) {
    if (!ensureBible()) return;
    const book = bibleData.books[bibleCursor.book];
    const chapter = book.chapters[bibleCursor.chapter];
    bibleBookPicker.value = String(bibleCursor.book);
    bibleChapterPicker.replaceChildren();
    book.chapters.forEach((_, index) => {
      const option = document.createElement('option');
      option.value = String(index);
      option.textContent = String(index + 1);
      bibleChapterPicker.append(option);
    });
    bibleChapterPicker.value = String(bibleCursor.chapter);
    $('#bible-reading-heading').textContent = `${book.name} ${bibleCursor.chapter + 1}`;
    const list = document.createElement('ol');
    list.className = 'bible-verses';
    chapter.forEach((text, index) => {
      const item = document.createElement('li');
      item.id = `bible-verse-${index + 1}`;
      if (highlight && index + 1 >= highlight.start && index + 1 <= highlight.end) item.className = 'bible-highlight';
      const number = document.createElement('button');
      number.type = 'button';
      number.className = 'bible-verse-number';
      number.textContent = String(index + 1);
      const reference = `${book.name} ${bibleCursor.chapter + 1}:${index + 1}`;
      number.setAttribute('aria-label', `Copy ${reference}`);
      number.addEventListener('click', () => copyText(`${reference} (KJV)\n${text}`));
      const words = document.createElement('p');
      words.textContent = text;
      item.append(number, words);
      list.append(item);
    });
    bibleContent.replaceChildren(list);
    bibleContent.scrollTop = 0;
    $('#bible-more').hidden = true;
    $('#bible-back').hidden = true;
    $('#copy-bible-chapter').hidden = false;
    $('#bible-previous').hidden = false;
    $('#bible-next').hidden = false;
    $('#bible-previous').disabled = bibleCursor.book === 0 && bibleCursor.chapter === 0;
    $('#bible-next').disabled = bibleCursor.book === 65 && bibleCursor.chapter === book.chapters.length - 1;
    $('#bible-reader-status').textContent = `${book.name} ${bibleCursor.chapter + 1} · ${chapter.length} verses · KJV`;
    applyBibleFont();
    rememberBible();
    if (highlight) requestAnimationFrame(() => {
      const item = $(`#bible-verse-${highlight.start}`);
      if (item) bibleContent.scrollTop = Math.max(0, item.offsetTop - 15);
    });
  }
  function openBible() {
    if (!ensureBible()) return;
    renderBibleChapter();
    if (!bibleDialog.open) bibleDialog.showModal();
    bibleDialog.scrollTop = 0;
  }
  function findBibleReference(query) {
    const match = /^(.+?)\s+(\d{1,3})(?:\s*:\s*(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?)?$/.exec(query);
    if (!match) return null;
    const cleanName = value => value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const name = cleanName(match[1]);
    const aliases = { jn: 'john', psalm: 'psalms', revelations: 'revelation', songofsongs: 'songofsolomon' };
    const resolved = aliases[name] || name;
    const exact = bibleData.books.findIndex(book => cleanName(book.name) === resolved);
    const candidates = bibleData.books.map((book, index) => ({ name: cleanName(book.name), index })).filter(book => book.name.startsWith(resolved));
    const index = exact >= 0 ? exact : candidates.length === 1 ? candidates[0].index : -1;
    if (index < 0) return { error: 'Please use a full Bible book name, such as John, Psalms, or 1 Corinthians.' };
    const chapter = Number(match[2]) - 1;
    const start = match[3] ? Number(match[3]) : null;
    const end = match[4] ? Number(match[4]) : start;
    const book = bibleData.books[index];
    if (chapter < 0 || chapter >= book.chapters.length) return { error: `${book.name} has ${book.chapters.length} chapters. Please choose a chapter in that range.` };
    if (start !== null && (start < 1 || end < start || end > book.chapters[chapter].length)) return { error: `${book.name} ${chapter + 1} has ${book.chapters[chapter].length} verses. Please choose a verse in that range.` };
    return { book: index, chapter, highlight: start === null ? null : { start, end } };
  }
  function goToBibleReference(query) {
    if (!ensureBible()) return false;
    const reference = findBibleReference(query.trim());
    if (!reference || reference.error) {
      $('#bible-reader-status').textContent = reference ? reference.error : 'Use a reference such as John 3:16 or Psalm 23.';
      return false;
    }
    bibleCursor.book = reference.book;
    bibleCursor.chapter = reference.chapter;
    renderBibleChapter(reference.highlight);
    return true;
  }
  $$('[data-open-bible]').forEach(button => button.addEventListener('click', openBible));
  $$('[data-bible-reference]').forEach(button => button.addEventListener('click', () => {
    openBible();
    if (bibleDialog.open) goToBibleReference(button.dataset.bibleReference);
  }));
  bibleBookPicker.addEventListener('change', () => {
    bibleCursor.book = Number(bibleBookPicker.value);
    bibleCursor.chapter = 0;
    renderBibleChapter();
  });
  bibleChapterPicker.addEventListener('change', () => { bibleCursor.chapter = Number(bibleChapterPicker.value); renderBibleChapter(); });
  function stepBible(direction) {
    const book = bibleData.books[bibleCursor.book];
    if (direction < 0 && bibleCursor.chapter > 0) bibleCursor.chapter--;
    else if (direction < 0 && bibleCursor.book > 0) { bibleCursor.book--; bibleCursor.chapter = bibleData.books[bibleCursor.book].chapters.length - 1; }
    else if (direction > 0 && bibleCursor.chapter < book.chapters.length - 1) bibleCursor.chapter++;
    else if (direction > 0 && bibleCursor.book < 65) { bibleCursor.book++; bibleCursor.chapter = 0; }
    renderBibleChapter();
  }
  $('#bible-previous').addEventListener('click', () => stepBible(-1));
  $('#bible-next').addEventListener('click', () => stepBible(1));
  $('#bible-smaller').addEventListener('click', () => { bibleCursor.font = Math.max(16, bibleCursor.font - 1); applyBibleFont(); rememberBible(); });
  $('#bible-larger').addEventListener('click', () => { bibleCursor.font = Math.min(24, bibleCursor.font + 1); applyBibleFont(); rememberBible(); });
  $('#copy-bible-chapter').addEventListener('click', () => {
    const book = bibleData.books[bibleCursor.book];
    const reference = `${book.name} ${bibleCursor.chapter + 1}`;
    copyText(`${reference} (KJV)\n\n${book.chapters[bibleCursor.chapter].map((text, index) => `${index + 1}. ${text}`).join('\n\n')}`, 'Bible chapter copied.');
  });
  function showBibleResults(append = false) {
    if (!append) { bibleContent.replaceChildren(); bibleContent.scrollTop = 0; bibleResultsShown = 0; }
    const next = Math.min(bibleResultsShown + 40, bibleResults.length);
    for (let index = bibleResultsShown; index < next; index++) {
      const result = bibleResults[index];
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'bible-search-result';
      const reference = `${bibleData.books[result.book].name} ${result.chapter + 1}:${result.verse}`;
      button.setAttribute('aria-label', `Read ${reference}`);
      const title = document.createElement('strong');
      title.textContent = reference;
      const words = document.createElement('span');
      words.textContent = result.text;
      button.append(title, words);
      button.addEventListener('click', () => {
        bibleCursor.book = result.book;
        bibleCursor.chapter = result.chapter;
        renderBibleChapter({ start: result.verse, end: result.verse });
        $('#bible-reading-heading').focus({ preventScroll: true });
      });
      bibleContent.append(button);
    }
    bibleResultsShown = next;
    $('#bible-more').hidden = bibleResultsShown >= bibleResults.length;
    $('#bible-reader-status').textContent = `${bibleResults.length} matching ${bibleResults.length === 1 ? 'verse' : 'verses'}. Showing ${bibleResultsShown}.`;
  }
  $('#bible-search-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!ensureBible()) return;
    const query = $('#bible-search').value.trim();
    if (query.length < 2) { $('#bible-reader-status').textContent = 'Enter a reference or at least two letters to search.'; return; }
    const reference = findBibleReference(query);
    if (reference) { goToBibleReference(query); return; }
    bibleResults = [];
    const needle = query.toLowerCase();
    bibleData.books.forEach((book, bookIndex) => book.chapters.forEach((chapter, chapterIndex) => chapter.forEach((text, verseIndex) => {
      if (text.toLowerCase().includes(needle)) bibleResults.push({ book: bookIndex, chapter: chapterIndex, verse: verseIndex + 1, text });
    })));
    $('#bible-reading-heading').textContent = `Search: “${query}”`;
    $('#copy-bible-chapter').hidden = true;
    $('#bible-previous').hidden = true;
    $('#bible-next').hidden = true;
    $('#bible-back').hidden = false;
    showBibleResults();
    if (!bibleResults.length) {
      const empty = document.createElement('p');
      empty.className = 'bible-no-results';
      empty.textContent = 'No matching verses. Try another word, a shorter phrase, or a reference such as John 3:16.';
      bibleContent.append(empty);
    }
  });
  $('#bible-more').addEventListener('click', () => showBibleResults(true));
  $('#bible-back').addEventListener('click', () => renderBibleChapter());

  function renderProfile() {
    const firstName = config.name.split(/\s+/)[0];
    $$('[data-profile-name]').forEach(node => { node.textContent = config.name; });
    $$('[data-first-name]').forEach(node => { node.textContent = firstName; });
    $$('[data-initials]').forEach(node => { node.textContent = config.initials; });
    $$('[data-brand]').forEach(node => {
      node.replaceChildren(document.createTextNode(firstName));
      const dot = document.createElement('span');
      dot.className = 'brand-dot'; dot.textContent = '.'; node.append(dot);
      node.closest('a').setAttribute('aria-label', `${firstName}, home`);
    });
    $('[data-tagline]').textContent = config.tagline;
    $('[data-bio]').textContent = config.bio;
    $('[data-mission]').textContent = config.mission;
    $('.statement-mark').textContent = config.initials;
    document.title = `${config.name} — Faith, Creativity & Purpose`;
    $('meta[name="description"]').content = `The personal portfolio of ${config.name}. ${config.tagline}`;
    const photo = $('#profile-photo');
    photo.alt = config.name;
    photo.hidden = !config.photo;
    $('[data-initials]').hidden = Boolean(config.photo);
    $('.hero-visual').setAttribute('aria-label', config.photo ? `Portrait of ${config.name}` : `Personal monogram for ${config.name}`);
    if (config.photo) photo.src = config.photo; else photo.removeAttribute('src');
    $('#year').textContent = String(new Date().getFullYear());
    renderProjects();
    requestAnimationFrame(updateScroll);
  }

  // Personalization is local to this visitor. Export embeds the actual content for sharing.
  function editorField(label, name, value, options = {}) {
    const wrapper = document.createElement('div');
    wrapper.className = 'field';
    const id = `project-${options.index}-${name}`;
    const caption = document.createElement('label');
    caption.htmlFor = id;
    caption.textContent = label;
    let input;
    if (options.type === 'select') {
      input = document.createElement('select');
      Object.entries(categories).forEach(([key, title]) => {
        const option = document.createElement('option');
        option.value = key; option.textContent = title; input.append(option);
      });
    } else {
      input = document.createElement(options.type === 'textarea' ? 'textarea' : 'input');
      if (input.tagName === 'INPUT') input.type = options.type === 'url' ? 'url' : 'text';
      if (input.tagName === 'TEXTAREA') input.rows = options.rows || 3;
      if (options.max) input.maxLength = options.max;
      input.required = Boolean(options.required);
    }
    input.id = id;
    input.name = `${name}-${options.index}`;
    input.dataset.projectField = name;
    input.value = value || '';
    input.addEventListener('input', () => { draftProjects[options.index][name] = input.value; editorDirty = true; });
    wrapper.append(caption, input);
    return wrapper;
  }
  function renderProjectEditor(focusNew = false) {
    const list = $('#project-editor-list');
    list.replaceChildren();
    draftProjects.forEach((project, index) => {
      const fieldset = document.createElement('fieldset');
      fieldset.className = 'project-editor';
      const legend = document.createElement('legend');
      legend.textContent = `Collection / project ${String(index + 1).padStart(2, '0')}`;
      const row = document.createElement('div');
      row.className = 'form-row';
      row.append(
        editorField('Title', 'title', project.title, { index, max: 70, required: true }),
        editorField('Category', 'category', project.category, { index, type: 'select' })
      );
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'remove-project';
      remove.textContent = 'Remove this project';
      remove.setAttribute('aria-label', `Remove ${project.title || `project ${index + 1}`} from this draft`);
      remove.addEventListener('click', () => {
        draftProjects.splice(index, 1);
        editorDirty = true;
        renderProjectEditor();
        $('#add-project').focus();
        $('#editor-feedback').textContent = 'Removed from this draft. Apply changes to save, or close without applying to discard.';
      });
      fieldset.append(legend, row,
        editorField('Short description', 'summary', project.summary, { index, max: 200, required: true }),
        editorField('Full story / project details', 'details', project.details, { index, type: 'textarea', max: 2400, rows: 4, required: true }),
        editorField('Status', 'status', project.status, { index, max: 60 }),
        editorField('Project link (optional, https:// or http://)', 'url', project.url, { index, type: 'url' }), remove);
      list.append(fieldset);
    });
    $('#add-project').disabled = draftProjects.length >= 12;
    if (focusNew) $('#project-editor-list fieldset:last-child input').focus();
  }
  $('#personalize').addEventListener('click', () => {
    ['name', 'initials', 'tagline', 'bio', 'mission'].forEach(key => { $(`#edit-${key}`).value = config[key]; });
    draftProjects = config.projects.map(project => ({ ...project }));
    draftPhoto = config.photo;
    draftPhotoOptOut = config.photoOptOut;
    $('#edit-photo').value = '';
    $('#photo-status').textContent = config.photo ? 'Your current photo is included.' : 'The monogram artwork is currently in use.';
    $('#editor-feedback').textContent = '';
    editorDirty = false;
    renderProjectEditor();
    editorDialog.showModal();
    editorDialog.scrollTop = 0;
  });
  editorForm.addEventListener('input', () => { editorDirty = true; });
  $('#add-project').addEventListener('click', () => {
    if (draftProjects.length >= 12) return;
    draftProjects.push({ id: `work-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, title: '', category: 'projects', summary: '', details: '', status: 'In progress', url: '' });
    editorDirty = true;
    renderProjectEditor(true);
  });

  $('#edit-photo').addEventListener('change', async event => {
    const file = event.target.files[0];
    if (!file) return;
    const status = $('#photo-status');
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
      status.textContent = 'Choose a JPG, PNG, or WebP image smaller than 5 MB.';
      event.target.value = '';
      return;
    }
    photoLoading = true;
    status.textContent = 'Preparing your photo…';
    const objectUrl = URL.createObjectURL(file);
    try {
      const image = new Image();
      image.src = objectUrl;
      await image.decode();
      const scale = Math.min(1, 1000 / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext('2d');
      context.fillStyle = '#efede4';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      draftPhoto = canvas.toDataURL('image/jpeg', .86);
      draftPhotoOptOut = false;
      editorDirty = true;
      status.textContent = 'Photo ready. Apply changes to use it.';
    } catch { status.textContent = 'That image could not be opened. Please choose another photo.'; }
    finally { URL.revokeObjectURL(objectUrl); photoLoading = false; }
  });
  $('#remove-photo').addEventListener('click', () => {
    if (photoLoading) { $('#photo-status').textContent = 'Please wait for the photo to finish preparing.'; return; }
    draftPhoto = '';
    draftPhotoOptOut = true;
    $('#edit-photo').value = '';
    $('#photo-status').textContent = 'The monogram will be used when you apply changes.';
    editorDirty = true;
  });

  function applyEditor() {
    if (!editorForm.reportValidity()) return false;
    const feedback = $('#editor-feedback');
    if (photoLoading) { feedback.textContent = 'Please wait until your photo is ready.'; return false; }
    const next = { ...config, photo: draftPhoto, photoOptOut: draftPhotoOptOut, projects: draftProjects.map(project => ({ ...project })) };
    for (const key of ['name', 'initials', 'tagline', 'bio', 'mission']) next[key] = $(`#edit-${key}`).value.trim();
    for (const key of ['name', 'initials', 'tagline', 'bio', 'mission']) {
      if (!next[key]) { feedback.textContent = 'Please fill in your story fields.'; $(`#edit-${key}`).focus(); return false; }
    }
    for (let index = 0; index < next.projects.length; index++) {
      const project = next.projects[index];
      for (const key of ['title', 'summary', 'details']) {
        if (!project[key].trim()) {
          feedback.textContent = `Please complete the ${key} for project ${index + 1}.`;
          $(`#project-${index}-${key}`).focus(); return false;
        }
      }
      if (project.url && !safeUrl(project.url)) {
        feedback.textContent = 'Project links must begin with https:// or http://.';
        $(`#project-${index}-url`).focus(); return false;
      }
    }
    config = normalize(next);
    const stored = safeStorage.set(storageKey, JSON.stringify(config));
    filter = 'all';
    $$('.filter-button').forEach(button => {
      const active = button.dataset.filter === 'all';
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderProfile();
    editorDirty = false;
    feedback.textContent = stored
      ? 'Changes applied in this browser. Download your updated HTML to keep or share this version.'
      : 'Changes applied for this visit. This browser could not save them; download your updated HTML to keep them.';
    return true;
  }
  editorForm.addEventListener('submit', event => { event.preventDefault(); applyEditor(); });

  function stylesForExport() {
    const inline = $('#standalone-styles');
    if (inline) return inline.textContent;
    try {
      const sheets = [...document.styleSheets];
      if (sheets.length) return sheets.map(sheet => [...sheet.cssRules].map(rule => rule.cssText).join('\n')).join('\n');
    } catch { /* Browsers often isolate file:// resources. Use the bundled snapshot. */ }
    return FALLBACK_STYLES;
  }
  function exportPage() {
    if (editorDirty && !applyEditor()) return;
    const clone = document.documentElement.cloneNode(true);
    // Replace external assets with source. The downloaded site works even offline.
    $$('link[rel="stylesheet"], script[src], #standalone-styles, #standalone-script', clone).forEach(node => node.remove());
    const style = document.createElement('style');
    style.id = 'standalone-styles';
    style.textContent = stylesForExport();
    $('head', clone).append(style);
    $('#portfolio-config', clone).textContent = JSON.stringify(config).replace(/</g, '\\u003c');
    const script = document.createElement('script');
    script.id = 'standalone-script';
    script.textContent = `${startPortfolio.toString()}\nstartPortfolio();`;
    $('body', clone).append(script);
    $$('dialog', clone).forEach(node => node.removeAttribute('open'));
    $$('.will-reveal', clone).forEach(node => node.classList.remove('will-reveal'));
    $('#nav', clone).classList.remove('open');
    $('#nav-backdrop', clone).hidden = true;
    $('#toast', clone).hidden = true;
    $('#toast', clone).textContent = '';
    $('#menu-toggle', clone).setAttribute('aria-expanded', 'false');
    $('#menu-toggle', clone).setAttribute('aria-label', 'Open navigation');
    $('#menu-toggle', clone).innerHTML = svg('menu');
    $('#project-editor-list', clone).replaceChildren();
    $('#editor-feedback', clone).textContent = '';
    $('#photo-status', clone).textContent = '';
    $('#bible-reader-content', clone).replaceChildren();
    $('#bible-reader-status', clone).textContent = '';
    $('#bible-book', clone).replaceChildren();
    $('#bible-chapter', clone).replaceChildren();
    $('#bible-search', clone).value = '';
    $('#bible-search', clone).removeAttribute('value');
    const filename = `${config.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'my'}-portfolio.html`;
    download(`<!doctype html>\n${clone.outerHTML}`, filename, 'text/html;charset=utf-8');
    $('#editor-feedback').textContent = 'Your updated HTML is ready. Open it directly or upload it to your web host. It includes your photo and all applied changes.';
  }
  $('#export-page').addEventListener('click', exportPage);

  // Reveal animations are optional. Every section remains readable without JavaScript.
  if ('IntersectionObserver' in window && !prefersReducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: .08 });
    $$('.reveal').forEach(node => { node.classList.add('will-reveal'); observer.observe(node); });
  }
  renderProfile();
  updateScroll();
}
startPortfolio();
