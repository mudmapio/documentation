---
title: Integration Troubleshooting
---

Potential issues that may arise during the installation and general use of Mudmap.

## SSH

Mudmap relies upon SSH as its communication channel between *pfSense* and the Mudmap servers. 
Any break or interruption to this will cause the issues and result in either a partial or 
complete loss of functionality.

SSH issues that could arise:

- [Authentication errors](#authentication-errors)
- [Network and connectivity disruptions](#network-and-connectivity-disruptions)
- [Firewall user account changes](#mudmap-user-account-has-been-altered)

### Authentication errors

Changes to the underlying authentication scheme between Mudmap and the device will affect the 
connectivity between them. 

Testing and remediation will require manually checking *pfSense*'s SSH configuration on the 
device. Testing the connectivity using a terminal with the same credentials and device 
properties as those stored in Mudmap are essential. 

Check the `mudmap` user account and inspect the Public Key. If missing, re-install the device by 
following '[Mudmap user account was changed](#mudmap-user-account-has-been-altered)'.

Also, if the *pfSense* device's SSH has been disabled and/or SSH authentication set to *Password 
only* ensure this is changed. Ensure the SSH port matches the port expected by Mudmap.

If the `mudmap` user account has been manually altered by any user on the device, it may result 
in SSH authentication errors. If this is suspected, try re-installing the device. See 
[here](#mudmap-user-account-has-been-altered)

### Network and connectivity disruptions

Network devices are subject to connectivity issues from time to time, Mudmap being no exception.

During investigations into sudden losses of functionality and/or connectivity it is important to 
check the following:

- Ping between *pfSense* and Mudmap
- Manual SSH testing into the *pfSense* firewall
- Network traffic in the browser developer tools
    - Network tab, select **XHR** and test the expected functionality of Mudmap

### Firewall user account changes

Refer to [Mudmap user account was changed](#mudmap-user-account-has-been-altered)

## API

The API agent is installed on every *pfSense* firewall when registering with Mudmap. It is 
possible for the API to be disrupted and cause connectivity issues.

There are two primary causes for an API failure:

- [*pfSense* has been upgraded](#pfsense-upgraded-has-been-upgraded)
- [The API has been altered](#the-api-has-been-altered)
- [Mudmap user account was changed](#mudmap-user-account-has-been-altered)

### pfSense has been upgraded

Upgrading *pfSense* **will** result in the removal of the API agent. This is a *pfSense* problem 
and cannot be overcome by Mudmap. If you are upgrading *pfSense* you will need to delete the 
device from Mudmap and re-install it again.

### The API has been altered

Remove the device from Mudmap and reinstall via the registration
process. This will ensure the API and `mudmap` user accounts are back in sync.

This includes changes to the GUI Port on the *pfSense* device. A mis-match between Mudmap and 
*pfSense*'s GUI Port will result in a partial or complete loss of expected functionality. Either 
re-install, or change the *pfSense* GUI port to match the one Mudmap expects. The ability to 
alter this in Mudmap is **not supported, yet.**

### Mudmap user account has been altered

This is similar to the API being altered. It will result in an out-of-sync system.

Remove the device from Mudmap and reinstall via the registration
process. This will ensure the API and `mudmap` user accounts are back in sync.
