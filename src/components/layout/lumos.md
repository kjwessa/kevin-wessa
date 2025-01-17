<style>
:root {
  --site--max-width: min(var(--site--width), 100vw);
  --container--main: calc(var(--site--max-width) - var(--site--margin) * 2);
  --container--full: calc(100vw - var(--site--margin) * 2);
  --container--small: calc(var(--column-width--plus-gutter) * (var(--site--column-count) - 2) - var(--site--gutter));
  --site--gutter-total: calc(var(--site--gutter) * (var(--site--column-count) - 1));
  --column-width--1: calc((var(--container--main) - var(--site--gutter-total)) / var(--site--column-count));
  --column-width--plus-gutter: calc(var(--column-width--1) + var(--site--gutter));
  --column-width--2: calc(var(--column-width--plus-gutter) * 2 - var(--site--gutter));
  --column-width--3: calc(var(--column-width--plus-gutter) * 3 - var(--site--gutter));
  --column-width--4: calc(var(--column-width--plus-gutter) * 4 - var(--site--gutter));
  --column-width--5: calc(var(--column-width--plus-gutter) * 5 - var(--site--gutter));
  --column-width--6: calc(var(--column-width--plus-gutter) * 6 - var(--site--gutter));
  --column-width--7: calc(var(--column-width--plus-gutter) * 7 - var(--site--gutter));
  --column-width--8: calc(var(--column-width--plus-gutter) * 8 - var(--site--gutter));
  --column-width--9: calc(var(--column-width--plus-gutter) * 9 - var(--site--gutter));
  --column-width--10: calc(var(--column-width--plus-gutter) * 10 - var(--site--gutter));
  --column-width--11: calc(var(--column-width--plus-gutter) * 11 - var(--site--gutter));
  --column-width--12: calc(var(--column-width--plus-gutter) * 12 - var(--site--gutter));
  --column-margin--1: calc(var(--column-width--plus-gutter) * 1);
  --column-margin--2: calc(var(--column-width--plus-gutter) * 2);
  --column-margin--3: calc(var(--column-width--plus-gutter) * 3);
  --column-margin--4: calc(var(--column-width--plus-gutter) * 4);
  --column-margin--5: calc(var(--column-width--plus-gutter) * 5);
  --column-margin--6: calc(var(--column-width--plus-gutter) * 6);
  --column-margin--7: calc(var(--column-width--plus-gutter) * 7);
  --column-margin--8: calc(var(--column-width--plus-gutter) * 8);
  --column-margin--9: calc(var(--column-width--plus-gutter) * 9);
  --column-margin--10: calc(var(--column-width--plus-gutter) * 10);
  --column-margin--11: calc(var(--column-width--plus-gutter) * 11);
  --column-margin--12: calc(var(--column-width--plus-gutter) * 12);
  --breakout-start: [full-start] minmax(0, 1fr) [content-start];
  --breakout-end: [content-end] minmax(0, 1fr) [full-end];
  --grid-breakout-single: var(--breakout-start) minmax(0, var(--container--main)) var(--breakout-end);
  --grid-breakout: var(--breakout-start) repeat(var(--site--column-count), minmax(0, var(--column-width--1))) var(--breakout-end);
  --grid-main: repeat(var(--site--column-count), minmax(0, 1fr));
  --grid-1: repeat(1, minmax(0, 1fr));
  --grid-2: repeat(2, minmax(0, 1fr));
  --grid-3: repeat(3, minmax(0, 1fr));
  --grid-4: repeat(4, minmax(0, 1fr));
  --grid-5: repeat(5, minmax(0, 1fr));
  --grid-6: repeat(6, minmax(0, 1fr));
  --grid-7: repeat(7, minmax(0, 1fr));
  --grid-8: repeat(8, minmax(0, 1fr));
  --grid-9: repeat(9, minmax(0, 1fr));
  --grid-10: repeat(10, minmax(0, 1fr));
  --grid-11: repeat(11, minmax(0, 1fr));
  --grid-12: repeat(12, minmax(0, 1fr));

  --text-transform--none: none;
  --text-transform--uppercase: uppercase;
  --text-transform--capitalize: capitalize;
  --text-transform--lowercase: lowercase;
  --text-transform--inherit: inherit;
}
* {
	vertical-align: bottom;
}
::before, ::after {
	box-sizing: border-box;
}
body {
	text-transform: var(--text-main--text-transform);
	font-smoothing: antialiased;
	-webkit-font-smoothing: antialiased;
}
label, blockquote {
	font-size: inherit;
	line-height: inherit;
	font-weight: inherit;
	margin-top: 0;
	margin-bottom: 0;
}
button {
	background-color: unset;
	padding: unset;
	text-align: inherit;
}
button:not(:disabled) {
	cursor: pointer;
}
video {
	width: 100%;
	object-fit: cover;
}
video.wf-empty {
	padding: 0;
}
svg {
	max-width: 100%;
}
section, header, footer {
	position: relative;
}
@media (prefers-color-scheme: light) {
	option {
		color: black;
	}
}
img::selection {
	background: transparent;
}
a:not([class]) {
	text-decoration: underline;
}
.w-richtext a {
	position: relative;
	z-index: 4;
}
[class*="u-text-style-"] > :where(h1,h2,h3,h4,h5,h6,p,blockquote) {
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	text-transform: inherit;
	text-wrap: inherit;
	margin-top: inherit;
	margin-bottom: inherit;
}
:not(.u-margin-trim-off, .u-block-gap, .w-background-video) > :not(:not(.w-condition-invisible) ~ :not(.w-condition-invisible)) {
	margin-top: 0;
}
:not(.u-margin-trim-off, .u-block-gap, .w-background-video) > :not(:has(~ :not(.w-condition-invisible))) {
	margin-bottom: 0;
}

.u-hide-if-empty:empty,
.u-hide-if-empty:not(:has(> :not(.w-condition-invisible))),
.u-hide-if-empty-cms:not(:has(.w-dyn-item)),
.w-richtext[class*="u-text-style-"] > :not(h1,h2,h3,h4,h5,h6,p,blockquote,ul,ol,span),
.u-embed-js,
.u-embed-css {
	display: none !important;
}

.u-line-clamp-1, .u-line-clamp-2, .u-line-clamp-3, .u-line-clamp-4 {
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.u-line-clamp-2 { -webkit-line-clamp: 2; }
.u-line-clamp-3 { -webkit-line-clamp: 3; }
.u-line-clamp-4 { -webkit-line-clamp: 4; }

a, button, [tabindex],
.w-checkbox-input--inputType-custom,
.w-form-formradioinput--inputType-custom {
	outline-offset: var(--focus--offset-outer);
}
a:focus-visible,
button:focus-visible,
[tabindex]:focus-visible,
.w-checkbox:has(:focus-visible) .w-checkbox-input--inputType-custom,
.w-radio:has(:focus-visible) .w-form-formradioinput--inputType-custom {
	outline-color: var(--theme--text);
	outline-width: var(--focus--width);
	outline-style: solid;
}
.w-checkbox-input--inputType-custom.w--redirected-focus,
.w-form-formradioinput--inputType-custom.w--redirected-focus {
	box-shadow: none;
}

.u-block-gap {
	--gap: var(--content-space--button-group-gap);
	--gap-x: var(--gap);
	--gap-y: var(--gap);
}
.u-block-gap > * {
	margin-inline: calc(var(--gap-x) / 2);
	margin-top: var(--gap-y);
	vertical-align: inherit;
}
:where(.u-block-gap > *) {
	display: inline-block;
}
.u-block-gap::before {
	content: "";
	display: table;
	margin-bottom: calc(var(--gap-y) * -1);
}

.u-block-gap-vertical {
	--gap: 0;
	--margin: var(--gap);
}
.u-block-gap-vertical > * {
	margin-top: var(--margin);
	margin-bottom: 0;
}

.u-gap-0 { --gap: 0; }
.u-gap-1 { --gap: var(--space--1); }
.u-gap-2 { --gap: var(--space--2); }
.u-gap-3 { --gap: var(--space--3); }
.u-gap-4 { --gap: var(--space--4); }
.u-gap-5 { --gap: var(--space--5); }
.u-gap-6 { --gap: var(--space--6); }
.u-gap-7 { --gap: var(--space--7); }
.u-gap-8 { --gap: var(--space--8); }
.u-gap-gutter { --gap: var(--site--gutter); }
.u-gap-row-0 { --gap-y: 0; }
.u-gap-row-1 { --gap-y: var(--space--1); }
.u-gap-row-2 { --gap-y: var(--space--2); }
.u-gap-row-3 { --gap-y: var(--space--3); }
.u-gap-row-4 { --gap-y: var(--space--4); }
.u-gap-row-5 { --gap-y: var(--space--5); }
.u-gap-row-6 { --gap-y: var(--space--6); }
.u-gap-row-7 { --gap-y: var(--space--7); }
.u-gap-row-8 { --gap-y: var(--space--8); }
.u-gap-row-gutter { --gap-y: var(--site--gutter); }

.u-child-contain > * {
	display: inline-block;
	width: 100%;
	max-width: inherit;
	margin-top: 0;
}

.u-text-margin-none :is([class*="u-text-style-"],h1,h2,h3,h4,h5,h6,p) {
	margin-top: 0;
	margin-bottom: 0;
}

[data-padding-top="none"] { padding-top: var(--section-space--none); }
[data-padding-bottom="none"] { padding-bottom: var(--section-space--none); }

[data-padding-top="even"] { padding-top: var(--site--margin); }
[data-padding-bottom="even"] { padding-bottom: var(--site--margin); }

[data-padding-top="small"] { padding-top: var(--section-space--small); }
[data-padding-bottom="small"] { padding-bottom: var(--section-space--small); }

[data-padding-top="main"] { padding-top: var(--section-space--main); }
[data-padding-bottom="main"] { padding-bottom: var(--section-space--main); }

[data-padding-top="large"] { padding-top: var(--section-space--large); }
[data-padding-bottom="large"] { padding-bottom: var(--section-space--large); }

.wf-design-mode .g_clickable_wrap {
	z-index: 0;
}
.g_clickable_wrap a[href="#"] {
	display: none;
}
.g_clickable_wrap a[href="#"] ~ button {
	display: block;
}
</style>
