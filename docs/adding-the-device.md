---
title: Adding Devices to Mudmap
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This section assumes two things:

- You have registered with Mudmap, if not see [Register an Account][register].
- The device you're about to add has been prepared, if not see 
  [Preparing your Device][prep]
  
## Overview

Before you can integrate your firewall into Mudmap it needs to be added to 
the list of devices and then registered within the application. The next 
two sections cover this process in detail.

The broad scheme is like so:

1. Add a new device to Mudmaps database (this page)
2. Register an added device, meaning make the initail connection, install 
   the agent and test connectivity (see [Registering Devices][registering] 
    for more info)

## Add the device

Adding your device to Mudmap is as simple as providing some information 
about the firewall and submitting that in a form. What information does 
Mudmap require?

- A label for the firewall, this is just for convenience
- Host Address, must be a IPv4 or IPv6 address
- SSH Port that is publicly available
- Graphical User Interface port - the port used to access the pfSense user 
  interface, defaults to 443
  :::note why do you need the pfSense user interface port?
  This is for the API only - it uses this port to interact with pfSense. This 
  does not need to be internet facing (highly recommend against that practice).
  :::
- pfSense version; possible combinations 2.4, 2.5 and 2.6

The *Device Registration* page has two components; **Register 
Device** and **Devices**. We only care about **Register Devices**, which 
should look the same as the image below.

<div style={{textAlign: 'center'}}>
<img  alt="Adding your pfSense firewall - Register the Device" src=
{useBaseUrl
('img/register-device-docs.png')} />
</div>

After filling out the required information click the **Add** button. 

### Devices are unique

If you've already added this device, the step will fail with an alert 
notification. Otherwise, you should get a success notification and see the 
newly added device appear in the *Devices* table to the right.

## Next steps

If you've made it this far, then congratulations, your device is now in 
Mudmap's database ready to be registered into the system. 

[register]: https://docs.mudmap.io/register-account
[prep]: https://docs.mudmap.io/preparing-devices
[registering]: https://docs.mudmap.io/registering-devices
