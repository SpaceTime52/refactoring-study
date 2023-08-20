import { Person, Photo, OutStream } from './chapter-8-interface';

function renderPerson(outStream: OutStream, person: Person): void {
  outStream.write(`<p>${person.name}</p>`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>location: ${person.photo.location}</p>`);
}

function listRecentPhotos(outStream: OutStream, photos: Photo[]): void {
  photos
    .filter((photo: Photo) => photo.date > recentDateCutoff())
    .forEach((photo: Photo) => {
      outStream.write('<div>');
      emitPhotoData(outStream, photo);
      outStream.write(`<p>location: ${photo.location}</p>`);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream: OutStream, photo: Photo): void {
  outStream.write(`<p>title: ${photo.title}</p>`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>`);
}

function renderPhoto(outStream: OutStream, aPhoto: Photo): void {
  outStream.write('rendered photo');
}

function recentDateCutoff(): Date {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
}

// ---------------------------------------------------

export function printEightDashFour() {
  const person: Person = {
    name: 'name',
    photo: {
      title: 'title',
      location: 'location',
      date: new Date(),
    },
  };

  console.log('\nchapter 8.4 >>>>>>>>>> ');
  console.log(`Person
<p>name</p>
rendered photo
<p>title: title</p>
<p>date: ${new Date().toDateString()}</p>
<p>location: location</p>

List of Recent Photos
<div>
<p>title: title</p>
<p>date: Sun Aug 13 2023</p>
<p>location: location</p>
</div>
---`);
  console.log('Person');
  renderPerson({ write: (data: string) => console.log(data) }, person);
  console.log('\nList of Recent Photos');
  listRecentPhotos({ write: (data: string) => console.log(data) }, [
    person.photo,
  ]);
}
