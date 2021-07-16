---
title: All the Devices in one Dashboard
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

The dashboard only displays the current *active* devices. An active device 
is one that is registered with Mudmap *and* connected to a firewall thereby 
receiving data from it. 

Inactive devices constitute any device which is in Mudmap's database but 
not yet connected, or receiving data from the firewall. 

If you want to see **all** devices - acitve and inactive - there is a page 
for it. 

## Devices page

On the left hand side panel is a link titled `Devices`. Clicking on this 
will take you to a page with two tables - active and inactive.

<div style={{textAlign: 'center'}}>
<img  alt="Adding your pfSense firewall - Register the Device" src=
{useBaseUrl
('img/mm-devices-all-page.png')} />
</div>

From this page its possible to *view* individual active devices, search for 
them and order the table.

It is also possible to <Highlight color="#4f46e5">activate</Highlight>, <Highlight color="#d97706">update</Highlight> or <Highlight color="#dc2626">delete</Highlight>
 devices just as you can when [registering a device](/registering-devices).
