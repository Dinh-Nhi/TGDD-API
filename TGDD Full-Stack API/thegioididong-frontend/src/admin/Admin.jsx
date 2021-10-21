import React, { Component } from 'react';
import Chart from 'react-google-charts';
import FooterAdmin from './share/FooterAdmin';
import HeaderAdmin from './share/HeaderAdmin';
import MenuAdmin from './share/MenuAdmin';

class Admin extends Component {
  render() {
    return (
      <div className="sb-top4-fixed backgroundadmin">
      <HeaderAdmin />
      <div id="layoutSidetop4">
        <MenuAdmin />
        <div className="qlln">
        <br/>   <br/>
  <div>
    <Chart
    width={1200}
    height={300}
  chartType="LineChart"
  data={[
    ['Ngày', 'Lợi Nhuận'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
    hAxis: {
      title: 'Lợi Nhuận Hằng Ngày',
    },
  }}
/>
</div>
          <FooterAdmin />
        </div>
      </div>
    </div>
 
    );
  }
}

export default Admin;