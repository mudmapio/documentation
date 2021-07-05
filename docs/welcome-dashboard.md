---
slug: "Introduction-to-the-Dashboard"
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
)

# The Mudmap Dashboard

Mudmap is built to provide with ease of use and improved oversight in mind. After logging in you 
are dropped into the dashboard. This is the command centre that at glance gives you oversight into
all your devices. 

<div style={{textAlign: 'center'}}>
<img  alt="Register your Mudmap account" src={useBaseUrl
('img/mm-dashboard-layout.png')} />
</div>

## Overview

All registered devices will be populated within the `Active Devices` table. The table has a 
search bar which will automatically filter as you type your search query. Each column is also 
sortable, meaning you can set them to be ascending or descending. 

Each row in the table contains information about each device including the user-friendly name, 
version, IP address, and number of currently connected DHCP clients. On the right hand side of 
each column is a <Highlight color="#4b5563">View Device</Highlight> button. Clicking this button 
will take you to a detailed view of the selected firewall.

## Side panel options

On the left-hand side of the dashboard are links to additional pages. 
