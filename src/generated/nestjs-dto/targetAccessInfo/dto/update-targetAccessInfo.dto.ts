export class UpdateTargetAccessInfoDto {
  accessedTime?: Date;
  redirectedUrl?: string;
  accessedTimeoutMax?: number;
  accessStatus?: string;
  accessStatusMessage?: string;
  certProtocol?: string;
  certIssuer?: string;
  certSubject?: string;
}
