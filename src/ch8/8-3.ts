import { Photo, Person } from './chapter-8-interface';

export function renderPerson(person: Person): string {
  const result: string[] = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(photo: Photo): string {
  return ['<div>', emitPhotoData(photo), '</div>'].join('\n');
}

function renderPhoto(photo: Photo): string {
  return 'rendered photo';
}
function emitPhotoData(photo: Photo): string {
  const result: string[] = [];
  result.push(`<p>title: ${photo.title}</p>`);
  result.push(`<p>location: ${photo.location}</p>`);
  result.push(`<p>date: ${photo.date.toDateString()}</p>`);
  return result.join('\n');
}

export function printEightDashThree() {
  const person: Person = {
    name: 'name',
    photo: {
      title: 'title',
      location: 'location',
      date: new Date(),
    },
  };

  console.log('\nchapter 8.3 >>>>>>>>>> ');
  console.log(`<p>name</p>
rendered photo
<p>title: title</p>
<p>location: location</p>
<p>date: ${new Date().toDateString()}</p>
---`);
  console.log(renderPerson(person));
}
