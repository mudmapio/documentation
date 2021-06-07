---
title: Register a Device with Mudmap
---

import useBaseUrl from '@docusaurus/useBaseUrl';
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


:::note Haven't added any devices yet?
This follows from the previous step, [Adding Devices to Mudmap][adding], if 
you have not added a device yet, be sure to read over that page first.
:::

Now that we've got a device showing up in the table of *Inactive Devices* 
we have three options; Activate, Update or Delete. 

A firewall that has been added but not yet made a connection with Mudmap 
will show up in the table like the image below.

<div style={{textAlign: 'center'}}>
<img  alt="Register your Mudmap account" src={useBaseUrl
('img/register-devices-docs-connections.png')} />
</div>

## Activation

To start the activation process is simple just click the <Highlight color="#cf51de">activate</Highlight> button 

Next, you will be prompted to enter the devices `root` password. The pop up will look something 
like this. 


:::info this password is not saved in the database
Mudmap does not store this password or log this information. A great number of things have been
done to optimise the application so that your root password is not stored.
:::

<div style={{textAlign: 'center'}}>
<img  alt="Register your Mudmap account" src={useBaseUrl
('img/root-pass-activate.png')} />
</div>


After entering the password. Mudmap will send a request to the firewall with the information 
you've previously supplied. This ensures that if any information is incorrect, or the device is 
unreachable, remediation steps can be conducted prior to the installation being attempted.

### Authenticated Success

If Mudmap can authenticate with the firewall the user will be prompted to install the API on to 
the device. 

Installation will start as soon as the user accepts the prompt. This may take a few minutes. 
Once the installation is complete a new alert with be displayed. 

The device will now disappear from the table as it is no longer *inactive* and will appear on 
the dashboard home page ready to be viewed in detail.

### Authentication Failed

If Mudmap cannot authenticate with the device it will send an alert notifying the user.

This could mean several things:

- Password is incorrect,
- Device details are incorrect,
- Network issues between Mudmap and the device,
- SSH is not enabled on the firewall
- A firewall rule is blocking the connection

In almost all instances, remediation starts with a user attempting to access the device manually.

Using the device credentials supplied to Mudmap, attempt to log in using the terminal or terminal 
emulator. If you cannot authenticate, double-check the information is correct. 

A common reason for this failure is the firewall set to `Public Key only` for SSH connections. 
Read [preparing devices] for more details on *why* Mudmap needs Password access via SSH and when 
it can be disabled.

## Update

To update a devices details click the <Highlight color="#2579f7">update</Highlight> button 

Entering wrong information, such as an incorrect IP address will result in a connection failure. 
This can be amended here.

Clicking <Highlight color="#2579f7">update</Highlight> will pop up a new form pre-populated with the current 
information about the firewall. Simply change the required information and submit the form.

Your device will now have the updated data and if correct be ready for activation.

## Delete

Deleting the device is as simple as clicking the <Highlight color="#f2383b">delete</Highlight> button 

This will delete the device from the database table inside Mudmap. Deleted devices can be re-registered at anytime. 
A recap on how to do that can be found at [here][adding].

## The Activation Flow

Once the installation procedure starts Mudmap will step over several tasks, such as:

- Installing the API Agent
- Creating the `mudmap` user account
- Granting `mudmap` the correct permissions

The agent installation, once complete, will refresh the *pfSense* GUI and create an API link 
inside the *General* tab. You are able to view the API in better detail there.

:::danger do not alter the API settings or `mudmap` user account
Altering the API settings, deleting the API or changing the `mudmap` user account details 
**will** in errors or even complete loss of connectivity.
:::

### Payment Required

The first device connected to Mudmap will receive a prompt for payment. [Paddle] is the payment 
provider and will be responsible for all transactions and payment related data. Read more about 
how [Paddle] works for Mudmap [here][paddle-mm]. 

After payment success, Mudmap will not prompt for payment again. Read more about how Mudmap 
calculates invoicing [here][payments].

### Why Root password?

Mudmap requires `root` access rights to do the initial installation onto the target device. 
Acting as a super user, Mudmap is able to:

- Install the API Agent
- Create a `mudmap` user account
- Provision the `mudmap` service account permissions and install SSH public keys

Once complete, and the device successfully registers with Mudmap, it 
will no longer need this level of privileged access. Nor will it require password authentication 
ove SSH.

**The password will not be saved or logged at any point.**

[adding]: adding-the-device.md
[preparing devices]: preparing-devices.md
[paddle]: https://paddle.com?ref=mudmap.io
[paddle-mm]: paddle-mor.md
[payments]: payment-summary.md