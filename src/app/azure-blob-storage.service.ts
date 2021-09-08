import { ErrorHandler, Injectable } from '@angular/core';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root'
})
export class AzureBlobStorageService {

  // Enter your storage account name
  // picturesAccount = "resumeblob001";
  // // container name
  // picturesContainer = "pictures";
  picturesAccount = "covidreportingdl2705";
  // // container name
  picturesContainer = "rawresume/Candidate_Resume";


  // +IMAGES
   uploadImage(sas: string, content: Blob, name: string, handler: () => void) {
    this.uploadBlob(content, name, this.containerClient(sas), handler)
  }

   uploadBlob(content: Blob, name: string, client: ContainerClient, handler: () => void) {
    let blockBlobClient = client.getBlockBlobClient(name);
    blockBlobClient.uploadData(content, { blobHTTPHeaders: { blobContentType: content.type } })
      .then(() => handler())
  }

   containerClient(sas: string): ContainerClient {
    return new BlobServiceClient(`https://${this.picturesAccount}.blob.core.windows.net?${sas}`)
            .getContainerClient(this.picturesContainer);
  }
}