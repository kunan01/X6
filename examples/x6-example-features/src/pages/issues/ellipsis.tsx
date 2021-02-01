import React from 'react'
import { Graph } from '@antv/x6'
import '../index.less'

Graph.registerNode(
  'new-rect',
  {
    inherit: 'rect',
    width: 160,
    height: 40,
    attrs: {
      label: {
        textAnchor: 'left',
        refX: 20,
        textWrap: {
          width: 120,
          height: 16,
          ellipsis: true,
        },
      },
    },
  },
  true,
)

const data = {
  nodes: [
    {
      shape: 'new-rect',
      id: 'node1',
      x: 40,
      y: 40,
      attrs: {
        label: {
          text: 'hello 测试 test 测试 ffg123ASDFGHJ',
        },
      },
    },
    {
      shape: 'new-rect',
      id: 'node2',
      x: 220,
      y: 40,
      attrs: {
        label: {
          text: 'asdfg测试测试测试sdfgh jkl asdfghjk',
        },
      },
    },
    {
      shape: 'new-rect',
      id: 'node3',
      x: 40,
      y: 100,
      attrs: {
        label: {
          text: '文字文字文字测试测试测试测试',
        },
      },
    },
    {
      shape: 'new-rect',
      id: 'node4',
      x: 220,
      y: 100,
      attrs: {
        label: {
          text: 'asdfghjklasdfghjklasdfghjkl',
        },
      },
    },
  ],
}

export default class Example extends React.Component {
  private container: HTMLDivElement

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      width: 1000,
      height: 800,
      grid: true,
    })

    graph.fromJSON(data)
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container
  }

  render() {
    return (
      <div className="x6-graph-wrap">
        <div ref={this.refContainer} className="x6-graph" />
      </div>
    )
  }
}