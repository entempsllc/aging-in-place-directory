# Manual quote-request routing runbook

## Current system

AgingGracefully.care submits homeowner quote requests to Formspree form `xykrakar`. Repository code does not automatically select or notify providers. Routing is manual.

## Intake owner

The owner/administrator of the Formspree form receives and reviews each submission in the Formspree dashboard and its configured notification inbox. The exact notification address must be confirmed in Formspree before publication; it is not stored in this repository.

## Required workflow

1. Open the Formspree submission and confirm that it contains a city, state, `source_page`, and `lead_reference`.
2. Screen obvious spam, duplicates, malformed contact details, and test submissions before sharing anything.
3. Identify the requested city from the city/state fields and verify it against `source_page`. Do not infer a different location from unrelated free text.
4. Check the corresponding city page and current provider records. Confirm that a provider still serves the location and appears relevant to the requested project. A directory listing is a research lead, not proof of availability, licensing, insurance, or suitability.
5. Select a provider using geographic fit and relevant service category. Do not route based on payment or sponsorship unless a separate written routing agreement explicitly permits it and the consumer-facing disclosure is updated.
6. Forward only the minimum information necessary for the provider to contact the consumer: name, preferred contact details, city/state, and project summary. Do not forward unrelated notes, health information, analytics identifiers, IP addresses, or other sensitive data.
7. Tell the provider that the consumer requested contact through Aging Gracefully and that no response, job, or qualification is guaranteed.
8. If no suitable provider is available, do not fabricate availability or forward the request outside the requested market. Record `no provider available`; contact the consumer only when an approved owner process exists. The site promises no response time.
9. Mark the submission with one of: `test`, `spam`, `duplicate`, `needs review`, `routed — provider/date`, `no provider available`, or `complete`. Preserve the original `lead_reference` for reconciliation.

## Duplicate and spam handling

- Treat matching contact details, project, city, and close timestamps as a possible duplicate.
- Keep the earliest complete submission and link later duplicates to it; do not notify providers repeatedly.
- Do not route synthetic references beginning with `ag-qa-` or `ag-verification-`.
- Use Formspree's spam decision as a signal, not as the sole basis for rejecting a legitimate request.

## Publication gate

Before increasing quote-form exposure, verify one synthetic submission end to end in Formspree and the configured administrative inbox. Confirm that `source_page`, city/state, and `lead_reference` survive unchanged and record the destination inbox privately outside this repository.
