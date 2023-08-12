interface Photo {
  title: string;
  location: string;
  date: Date;
}

interface Person {
  name: string;
  photo: Photo;
}

export function renderPerson(person: Person): string {
  const result: string[] = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(p: Photo): string {
  return ['<div>', `<p>title: ${p.title}</p>`, emitPhotoData(p), '</div>'].join('\n');
}

function emitPhotoData(aPhoto: Photo): string {
  const result: string[] = [];
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function renderPhoto(aPhoto: Photo): string {
  return 'rendered photo';
}

export function printEightDashThree() {
  console.log('\nchapter 8.3 >>>>>>>>>> ');
  const person: Person = {
    name: 'name',
    photo: {
      title: 'title',
      location: 'location',
      date: new Date(),
    },
  };
  console.log(`<p>name</p>
rendered photo
<p>title: title</p>
<p>location: location</p>
<p>date: Sat Aug 12 2023</p>
---`);
  console.log(renderPerson(person));
}
