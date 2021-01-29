import { Injectable } from '@angular/core';
import { ErrorHandler } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ChunkHandlerService implements ErrorHandler{
  handleError(error: any): void {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if(chunkFailedMessage.test(error.message)) {
       if(confirm("New version available. Load New Version?")) {
           window.location.reload();
         }
    }
  }
  
}

