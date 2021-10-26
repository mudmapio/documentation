---
title: pfSense+, pfSenseCE and Mudmap
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info tl;dr
Mudmap will now only support *pfSense* Community Edition
:::

After extensive investigation and developer testing, I have made the 
decision to suspend support for all [pfSense+] devices going forward. 

This is not a decision I have taken lightly but out of an abundance of caution.

[Netgate]'s decision to split *pfSense* into an open *and* closed source 
model, while good, has created an "arms race" for applications such as 
Mudmap. Any updates delivered by pfSense could break Mudmap, or worse, 
cause issues on the device itself. This is an unacceptable risk to you.

Simply put, changes to the closed source product (pfSense+) mean it is not 
easy to create a consistent and safe API for production use.

Due to this, I am now deeming Mudmap and pfSense+ incompatible 
owing to the potential disruption it may cause your hardware or software 
pfSense clients. I will not produce a product that could cause loss of 
productivity or worse for a device as critical as your firewall.

## Where to from here?

Mudmap continues to support pfSenseCE. The open-source nature of CE means 
updates to pfSense are easier to integrated into Mudmap. 

For pfSense+, I will continue to monitor its development. Netgate is going 
to release a [rewrite of pfSense][rewrite] in [Golang] with a new user 
interface. This will include an API, likely [modelled off][pf-api] the 
already in production [TNSR] product. I eagerly await this, and will be 
rapidly adapting Mudmap to fit this new API. 

Until then, Mudmap will only be able to provide central management for 
*pfSense* Community Edition. 

Thanks for your understanding,

[Dan]

[tnsr]: https://www.tnsr.com/
[pf-api]: https://docs.netgate.com/tnsr/en/latest/api/
[pfsense+]: https://www.netgate.com/blog/announcing-pfsense-plus
[rewrite]: https://www.netgate.com/blog/pfsense-plus-pfsense-ce-dev-insights-direction
[golang]: https://golang.org
[netgate]: https://netgate.com
[dan]: mailto:dan@mudmap.io
