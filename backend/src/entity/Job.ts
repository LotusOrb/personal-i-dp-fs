export class Job {
  constructor(job: Job) {
    this.id = job.id;
    this.type = job.type;
    this.url = job.url;
    this.created_at = job.created_at;
    this.company = job.company;
    this.company_url = job.company_url;
    this.location = job.location;
    this.title = job.title;
    this.description = job.description;
    this.how_to_apply = job.how_to_apply;
    this.company_logo = job.company_logo;
  }
  id?: string;
  type?: string;
  url?: string;
  created_at?: string;
  company?: string;
  company_url?: string;
  location?: string;
  title?: string;
  description?: string;
  how_to_apply?: string;
  company_logo?: string;
}
