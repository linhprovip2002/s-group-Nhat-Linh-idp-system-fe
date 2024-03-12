import React from 'react';
import { NoLayout } from 'src/shared/ui/components/NoLayout';
import { NextPageWithLayout } from '../src/shared/model/next.types';

const MaintenancePage: NextPageWithLayout = (): React.ReactElement => (
  <>System maintenance</>
);

MaintenancePage.getLayout = NoLayout;

export default MaintenancePage;
