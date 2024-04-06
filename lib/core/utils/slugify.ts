export default function slugify(text: string) {
  return text
    .normalize('NFD') // Normalize the string to NFD.
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (accents).
    .toLowerCase() // Convert to lowercase.
    .replace(/ /g, '-'); // Replace spaces with hyphens.
};
