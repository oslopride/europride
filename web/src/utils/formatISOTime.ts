 const formatISOTime = (date: Date, locale: string) => {
    const newDate = new Date(date);
    const dateNum = newDate.getDate();
    const month = newDate.toLocaleDateString(locale, { month: "long" });
    const year = newDate.getFullYear();
    return `${dateNum} ${month} ${year}`;
  };

  export default formatISOTime;
