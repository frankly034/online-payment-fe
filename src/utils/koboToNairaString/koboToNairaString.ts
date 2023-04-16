const koboToNairaString = (kobo: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "NGR",
  }).format(kobo / 100);

export default koboToNairaString;
