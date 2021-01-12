import React from 'react';
import ss from './index.module.css';

export default class LayoutResize extends React.PureComponent {
  state = {
    dragging: false,
    startPageX: 0,
    siderWidth: 150,
  };

  handleMouseDown = (evt: any) => {
    this.setState({
      dragging: true,
      startPageX: evt.pageX,
    });
  };
  handleMouseUp = () => {
    this.setState({
      dragging: false,
    });
  };
  handleMouseMove = (evt: any) => {
    let siderWidth = this.state.siderWidth + evt.pageX - this.state.startPageX;
    if (siderWidth < 20 || siderWidth > 300) return;
    this.setState({
      siderWidth,
      startPageX: evt.pageX,
    });
  };
  render() {
    const { dragging, siderWidth } = this.state;
    const pxWidth = `${siderWidth}px`;
    return (
      <div className={ss.container} style={{ paddingLeft: pxWidth }}>
        <div className={ss.header}>Header</div>
        <div className={ss.sider} style={{ width: pxWidth }}>
          Sider
        </div>
        <div className={ss.content} style={{ left: pxWidth }}>
          Content
        </div>
        <div className={ss.footer} style={{ left: pxWidth }}>
          Footer
        </div>
        <div
          className={ss.siderResizer}
          style={{ left: pxWidth }}
          onMouseDown={this.handleMouseDown}
        />
        {dragging && (
          <div
            className={ss.resizeMask}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
          />
        )}
      </div>
    );
  }
}