export class UserImage {

  constructor(
              public userImageId: number,
              public userId: number,
              public currentImageStringData: string,
              public previousImageStringData: string,
              public lastupdatedDate: number,
              public lastUploadedDate: number,
              public imageLocation: string,
              public imageBackupLocation: string,
              public imageFormat: string
              ) {}

}
