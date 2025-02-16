const valutesInTenge = [
  {
    name: 'usd',
    value: 510,
  },
  {
    name: 'euro',
    value: 530,
  },
];

const valueConverter = (from: string, to: string, amount: number): number => {
  if (from != 'tenge') {
    return 0;
  }

  if (to === 'usd') {
    return Math.floor(amount / valutesInTenge[0].value);
  }

  if (to === 'euro') {
    return Math.floor(amount / valutesInTenge[1].value);
  }

  return 0;
};

export default valueConverter;
