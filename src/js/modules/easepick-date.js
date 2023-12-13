import { easepick } from '@easepick/bundle';

function easepicker() {
   const picker = new easepick.create({
      element: document.getElementById('datepicker'),
      css: [
          'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
          'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
        ],
        format: "DD/MM/YY"
  });
}
   
export default easepicker;