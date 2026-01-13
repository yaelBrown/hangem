export async function getSolPriceUSD(): Promise<number> {
  const url = "https://api.coinpaprika.com/v1/tickers/sol-solana";

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch SOL price: ${res.status}`);
  }

  const data = await res.json();

  return data.quotes.USD.price;
}
