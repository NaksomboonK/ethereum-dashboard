export interface coinListItem {
  id: string;
  symbol: string;
  name: string | undefined;
  platforms: coinPlatform | undefined;
}

export interface coinPlatform {
  ethereum?: string | undefined;
}
