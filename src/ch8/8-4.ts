interface Photo {
  title: string;
  location: string;
  date: Date;
}

interface Person {
  name: string;
  photo: Photo;
}

interface OutStream {
  write: (data: string) => void;
}

function renderPerson(outStream: OutStream, person: Person): void {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream: OutStream, photos: Photo[]): void {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream: OutStream, photo: Photo): void {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
  outStream.write(`<p>location: ${photo.location}</p>\n`);
}

function renderPhoto(outStream: OutStream, aPhoto: Photo): void {
  outStream.write('');
}

function recentDateCutoff(): Date {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
}
