import * as React from 'react';
import * as kjua from 'kjua';

export interface IProps {
  // render method: 'canvas', 'image' or 'svg'
  render?: string,

  // render pixel-perfect lines
  crisp?: boolean,

  // minimum version: 1..40
  minVersion?: number,

  // error correction level: 'L', 'M', 'Q' or 'H'
  ecLevel?: string,

  // size in pixel
  size?: number,

  // pixel-ratio, null for devicePixelRatio
  ratio?: number,

  // code color
  fill?: string,

  // background color
  back?: string,

  // content
  text?: string,

  // roundend corners in pc?: 0..100
  rounded?: number,

  // quiet zone in modules
  quiet?: number,

  // modes?: 'plain', 'label' or 'image'
  mode?: string,

  // label/image size and pos in pc?: 0..100
  mSize?: number,
  mPosX?: number,
  mPosY?: number,

  // label
  label?: string,
  fontname?: string,
  fontcolor?: string,

  // image element
  image?: any
}

export class Kjua extends React.PureComponent<IProps, {}> {
  private el: React.RefObject<HTMLCanvasElement>;
  private qr: HTMLCanvasElement;

  public static defaultProps: IProps = {
    render: 'svg',
    crisp: true,
    minVersion: 1,
    ecLevel: 'L',
    size: 200,
    ratio: null,
    fill: '#333',
    back: '#fff',
    text: 'no text',
    rounded: 0,
    quiet: 0,
    mode: 'plain',
    mSize: 30,
    mPosX: 50,
    mPosY: 50,
    label: 'no label',
    fontname: 'sans',
    fontcolor: '#333',
    image: null
  };

  constructor(props: IProps) {
    super(props);
    this.el = React.createRef();
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.el.current.removeChild(this.qr)
    this.update();
  }

  update() {
    this.qr = kjua(this.props);
    this.el.current.appendChild(this.qr);
  }

  render() {
    return React.createElement('div', {
      ref: this.el
    });
  }
}
