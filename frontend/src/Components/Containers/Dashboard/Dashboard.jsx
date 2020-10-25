import React from 'react';

import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import DashboardMain from '../DashboardMain/DashboardMain';
import {DashboardPage} from './Dashboard.styles';

const Dashboard = () => {
 return (
  <DashboardPage>
    <HeaderBar />
    <DashboardMain />
  </DashboardPage>
 )
}

export default Dashboard;
