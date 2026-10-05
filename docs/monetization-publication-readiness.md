# Monetization publication readiness — 2026-10-05

## Product artifact

- Final filename: `Aging-Gracefully-Home-Modification-Quote-Comparison-Kit.zip`
- Size: 43,225 bytes
- SHA-256: `ef63e726ff7189b817f043bf43ebd85a55ed28eb62732b22da21455b24bbdbf9`
- Verified: 2026-10-05
- Contents only:
  - `Aging-Gracefully-Home-Modification-Comparison-Kit.pdf` — 167,234 bytes; 12 pages; fillable; SHA-256 `70023f1652b21ff3c1785508ffbe0f9a780ab0a78d7dcdf838ac35e7b0d605fc`
  - `Aging-Gracefully-Quote-Comparison-Workbook.xlsx` — 12,533 bytes; six sheets; SHA-256 `db5058f353ebea9256ab078335b0c43a25ca3c1aff248dc6f8cd6d685885f6c2`
- ZIP integrity test passed; product artifact tests passed 3/3.
- Marker scan found no private-key, API-key, Stripe-secret, password, customer-data, or Gmail-address markers. No temporary files, notes, source, tests, duplicate entries, or extra artifacts are present.

The older checksum `091e02b751b627c64302e764df9f3f312743279bfc2bf05997155be61aa0bb5e` is superseded. The older ZIP is unavailable, so its byte-level difference cannot be reconstructed. The current ZIP is generated from the current Version 1.1 source and its embedded PDF/XLSX bytes match the independently tested deliverables; it must not be reverted solely to match the stale record.

## Readiness matrix

| Requirement | Status | Evidence / action |
|---|---|---|
| Website changes introduce no regression | PASS | Focused tests and Node tests pass; full Python suite has only classified pre-existing failures. |
| Current product artifact verified | PASS | Hashes, ZIP membership, integrity, PDF/workbook tests recorded above. |
| Test-mode fulfillment succeeds end to end | BLOCKED | Cloudflare Wrangler is not authenticated; Stripe CLI/test account is unavailable; no test resources were created. |
| Production requirements are known | PASS | Deploy Worker + D1 + private KV, configure test Payment Link/webhook/success URL, Resend sender/secrets, then repeat in live mode only after test acceptance. |
| Lead inbox delivery verified | OWNER ACTION REQUIRED | In Formspree form `xykrakar`, search submissions and the configured notification inbox for `ag-qa-20261005T013024Z`. Confirm spam status, destination, timestamp, city/state, `source_page`, and notification delivery. The locally authorized `cleaning-ops` mailbox returned no match and is not proven to be the destination. |
| Manual lead routing documented | PASS | `docs/lead-routing-runbook.md`. |
| Desktop/mobile visual verification | PASS | Playwright 1.62.1 tested 10 routes at 1440×900 and 390×844: 20 page checks, 8 screenshots, no branch-caused console/page errors, broken images, overlap, or overflow after the provider CTA mobile-width fix. |
| Expanded $9 promotion | BLOCKED | No deployed/tested fulfillment path. Preserve current checkout and do not add promotion. |
| Safe UI/targeting publication | OWNER ACTION REQUIRED | Visual checks pass. Require only Formspree destination and notification confirmation before publishing the whole branch. |

## Test-mode owner setup required

1. Authenticate Wrangler locally with `wrangler login` in the fulfillment-worker directory.
2. Create a test D1 database and private KV namespace; replace test binding placeholders with their non-secret IDs.
3. Upload the verified ZIP to KV as `comparison-kit.zip` and verify its downloaded hash.
4. In Stripe test mode, create/identify the $9 USD product and Payment Link; configure the Worker success URL and signed webhook for `checkout.session.completed` and `checkout.session.async_payment_succeeded`.
5. Store `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, and `RESEND_API_KEY` using `wrangler secret put`; never commit values.
6. Verify a Resend sender/domain and set non-secret `BASE_URL` and `DELIVERY_FROM`.
7. Perform a supported Stripe test-card transaction and inspect Stripe event delivery, D1 purchase/token rows, success download, recovery email and claim, duplicate webhook behavior, expired/malformed grants, wrong amount/link and unpaid sessions.

No production Payment Link or live secret should be changed until every test-mode gate passes.
