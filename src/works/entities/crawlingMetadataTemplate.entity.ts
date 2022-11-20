import { CrawlingMetadataTemplate } from '@prisma/client';
import { CrawlingMetadataColumnEntity } from './crawlingMetadataColumn.entity';
import { WorkEntity } from './work.entity';

export class CrawlingMetadataTemplateEntity
  implements CrawlingMetadataTemplate
{
  id: string;
  name: string;
  description: string | null;
  createdTime: Date;
  updatedTime: Date;
  CrawlingMetadataColumn?: CrawlingMetadataColumnEntity[];
  Work?: WorkEntity[];
}
