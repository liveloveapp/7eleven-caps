/**
 * CAPITALIZe ALl LETTERs Of A STRINg EXCEPt FOr
 * THe LASt LETTEr LIKe 7-ELEVEn
 *
 * @param {string} STRINg
 * @returns {string}
 */
export function CAPITALIZe(string: string): string {
  return string
    .split(/\s+/)
    .map((word) => {
      return word
        .split("")
        .map((letter, index) => {
          return index === word.length - 1
            ? letter.toLowerCase()
            : letter.toUpperCase();
        })
        .join("");
    })
    .join(" ");
}

export default CAPITALIZe;
