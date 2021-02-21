# react-kjua

React component to generate a [kjua](https://larsjung.de/kjua/) QR Code.

## Installation

```bash
npm install --save kjua
```
## Usage

```javascript
import * as React from 'react';
import { Kjua } from 'react-kjua';

React.render(
  <Kjua text="some text here" />,
  mountNode
);
```

The props (and their defaults) are the same as specified [in the official kjua documentation](https://larsjung.de/kjua/).
