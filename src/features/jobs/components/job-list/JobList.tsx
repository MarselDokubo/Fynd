import { Box } from '@chakra-ui/react';

import { LinkComponent } from '@/components/link';
import { Job } from '../..';
import { DataTable, DataTableProps } from '@/components/data-table';

type JobListType = 'public' | 'dashboard';

export type JobListProps = {
  type: JobListType;
  jobs: Job[];
  isLoading?: boolean;
  organisationId: string;
};

const getTableColumns = (organisationId: string, type: JobListType) => {
  return <div></div>;
};
