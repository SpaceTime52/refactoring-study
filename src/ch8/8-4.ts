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
  outStream.write(`<p>${person.name}</p>`);
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
  outStream.write(`<p>title: ${photo.title}</p>`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>`);
  outStream.write(`<p>location: ${photo.location}</p>`);
}

function renderPhoto(outStream: OutStream, aPhoto: Photo): void {
  outStream.write('rendered photo');
}

function recentDateCutoff(): Date {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
}

export function printEightDashFour() {
  console.log('\nchapter 8.4 >>>>>>>>>> ');
  console.log(`<p>name</p>
rendered photo
<p>title: title</p>
<p>date: Sat Aug 12 2023</p>
<p>location: location</p>
---`);
  const person: Person = {
    name: 'name',
    photo: {
      title: 'title',
      location: 'location',
      date: new Date(),
    },
  };
  renderPerson({ write: (data: string) => console.log(data) }, person);
}
