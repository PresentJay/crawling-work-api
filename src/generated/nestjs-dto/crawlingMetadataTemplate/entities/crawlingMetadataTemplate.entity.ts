import { CrawlingMetadataColumn } from '../../crawlingMetadataColumn/entities/crawlingMetadataColumn.entity';
import { Work } from '../../work/entities/work.entity';

export class CrawlingMetadataTemplate {
  id: string;
  name: string;
  description: string | null;
  createdTime: Date;
  updatedTime: Date;
  CrawlingMetadataColumn?: CrawlingMetadataColumn[];
  Work?: Work[];
}
