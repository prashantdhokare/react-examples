import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export const fromEventSource = (url, openObserver) => {
  return new Observable(observer => {
    const open = new Subscriber(openObserver);
    const source = new EventSource(url);

    const onOpen = event => {
      open.next(event);
      open.complete();
    };

    const onError = event => {
      if (event.readyState === EventSource.CLOSED) {
        observer.complete();
      } else {
        observer.error(event);
      }
    };

    const onMessage = event => {
      observer.next(event.data);
    };

    source.addEventListener('open', onOpen, false);
    source.addEventListener('error', onError, false);
    source.addEventListener('message', onMessage, false);

    return () => {
      source.removeEventListener('open', onOpen, false);
      source.removeEventListener('error', onError, false);
      source.removeEventListener('message', onMessage, false);
      source.close();
    };
  });
};
