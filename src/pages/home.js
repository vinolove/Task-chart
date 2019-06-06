import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <a href="/dashboard">
                    <li>
                        dashboard
                    </li>
                    </a>
                    <a href="/pie-chart">
                        <li>
                            Pie Chart
                        </li>
                    </a>
                    <a href="/line-chart">
                        <li>
                            Line Chart
                        </li>
                    </a>
                </ul>
            </div>
        )
    }
}
