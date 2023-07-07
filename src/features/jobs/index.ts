import { Entity } from '@/types';

export type Job = Entity & {
  organisationId: string;
  position: string;
  info: string;
  location: string;
  department: string;
};

export type CreateJobData = Pick<
  Job,
  'position' | 'department' | 'location' | 'info'
>;
