import { CrawlingMetadataColumn } from '../../crawlingMetadataColumn/entities/crawlingMetadataColumn.entity';
import { WorkEntity } from './work.entity';

export class CrawlingMetadataTemplateEntity {
  id: string;
  name: string;
  description: string | null;
  createdTime: Date;
  updatedTime: Date;
  CrawlingMetadataColumn?: CrawlingMetadataColumn[];
  Work?: WorkEntity[];
}
