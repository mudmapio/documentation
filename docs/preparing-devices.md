---
title: Preparing your Device
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before you can use your device with [Mudmap], the device needs to be able to
communicate with our servers. This page covers all the requirements for 
connecting to the server and what you'll need to do on each of your devices.

Thankfully, this process is quite easy and quick to do. Once the firewall is 
accessible you'll be able to connect to [Mudmap].

## How it works

TODO

## SSH setup in pfSense

Firstly, you will need to enable SSH in *pfSense*. To do that you'll need to
do the following:

- Navigate to **System > Advanced, Admin Access** tab
- Check **Enable Secure Shell**
- Set **SSHd Key Only** to *Password or Public Key*. Mudmap needs to be 
  able to use *both* modes.
  :::info Why not *Public Key Only*?
  Only the initial connection and installation of a Mudmap service account
  requires *Password* SSH authentication. After your device and Mudmap are
  connected, you can change this to *Public Key Only*. In the future, Mudmap
  will support *Public Key* for the initial setup but for now you must enable
  *Password* SSH.
  ::: 
- Enter a port number in **SSH Port** if you want SSH to use a non-default 
  port. Leave it blank for 
  port 22.
  :::caution Change SSH port
  Mudmap accepts non-default ports for SSH and **highly recommends** that you
  use a custom port instead of the default of 22.
  :::
- Click **Save**

It should look something like this. Note the non-default port for illustration
purposes.


<div style={{textAlign: 'center'}}>
<img  alt="Preparing your pfSense firewall - SSH" src={useBaseUrl
('img/preparing-device-ssh-pfsense.png')} />
</div>


### Netgate docs - SSH

For detailed instructions from the manufacturer, [Netgate], click [here]
[pfsense-docs]. Note, their recommendations and why Mudmap needs to deviate 
from them slightly.

## Rules, ports and recommendations

Now that SSH is turned on, we need to make it accessible over the internet. 
By default, SSH cannot be accessed over a WAN. 

It is a good idea to set up firewall rules to limit the scope of allowable 
connections. This section will show an example of how to create a firewall 
rule which *will* grant Mudmap access over SSH to your device. 

### Creating a rule

To create a rule:

- On the top navigation bar click **Firewall, Rules**
- Select the **WAN** interface
- Click *Add* (the first option with an upwards arrow)

This will drop you into the **Firewall > Rules > Edit** page.

Most options can be left blank. Change the following:

- **Destination** click **This firewall (self)**
- **Destination Port Range** type the port number you're SSH daemon is 
  listening on inside the *Custom* fields for both the *From* and *To* boxes.
- **Description** should be filled out with what this rule is used for, for 
  example, *Mudmap Initial SSH Connection via WAN*. This way we know, once 
  the device and Mudmap are communicating we can delete or disable this rule.

:::note source address
Mudmap has not yet confirmed the range of IP addresses for this setting. 
Once done, this section will be updated. However, SSH is a secure protocol 
and enabling a rule with good source matching is nice but not needed.
:::

The **Destination** fields should look similar to the image below. 

<div style={{textAlign: 'center'}}>
<img  alt="Preparing your pfSense firewall - SSH Rule destination field" src=
{useBaseUrl
('img/preparing-device-ssh-rule-destination.png')} />
</div>

Ensure that you click **Save** once complete to register the rule in pfSense.

After saving the rule, pfSense will redirect you back to the firewall rules 
page and display a green **Apply Changes** button. Click this to refresh 
pfSense's rule engine. If you have any Deny All rules make sure your newly 
created rule is above them. The rule order is sequential from top to bottom 
on the rule page.

### User accounts

To access the firewall you will need the password or SSH key. By default, 
no users have an associated Authorized SSH Key pinned inside pfSense. 
Creating a user, or adding an SSH key is outside the scope of this section. 
However, when Mudmap makes its initial connection and installation of the 
agent, it will install a service account with its Public SSH key. This 
ensures the agent can connect to the device **without** password 
authentication.

To read up on user accounts for pfSense, please see their 
[documentation][pf-user-docs] on the matter.

## SSH concerns and Mudmap alternatives

Typically, you don't want to make your firewall publicly accessible. 
Unfortunately, in order to integrate with Mudmap, it is a requirement. 
Mudmap does require (for now) that users offer a password to authenticate on 
the initial set up. This can be turned off once the device has made its 
first connection with our servers. However, I point out from Netgate some 
sage advice regarding those passwords.

> If password authentication is active, ensure that all user accounts with
> shell access have strong passwords that cannot be easily guessed. - Netgate
 
There are alternatives should you feel too uncomfortable with this. Sadly, 
none of these will give you the convience of managing *all* your firewalls 
from one location.

For consideration have a look at some of these options if you feel Mudmap is 
not for you. 

- Simple remote [SSH tunnelling][ssh-video]
- [OpenVPN] for [remote connections][remote-video]

Alternatively, get in touch via the [contact] page if you want 
to discuss other options such as:

- Self-hosting
- Jump or Bastion hosts
- Alternative methods of communications such UDP 
  punching technologies, and others - [ZeroTier], [Nebula], and [TailScale] 
  for instance.

[mudmap]: https://mudmap.io/
[netgate]: https://netgate.com/
[pfsense-docs]: https://docs.netgate.com/pfsense/en/latest/recipes/ssh-access.html#User_Access
[pf-user-docs]: https://docs.netgate.com/pfsense/en/latest/usermanager/index.html
[contact]: https://mudmap.io/contact
[zerotier]: https://zerotier.com
[nebula]: https://defined.net
[tailscale]: https://tailscale.com
[openvpn]: https://openvpn.net
[ssh-video]: https://www.youtube.com/watch?v=MVoe3mX_UZQ&ab_channel=LawrenceSystems
[remote-video]: https://www.youtube.com/watch?v=PgielyUFGeQ&ab_channel=LawrenceSystems
