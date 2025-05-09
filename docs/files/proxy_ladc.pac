function FindProxyForURL(url, host) {
  // add proxy to ladc
  if (
    dnsDomainIs(host, ".mgr.ldi.co.jp") ||
    dnsDomainIs(host, ".laws-hy-stg01.lzdc.jp") ||
    dnsDomainIs(host, ".laws-hy-prd01.lzdc.jp")
  ) {
    return "PROXY ladc-vless-napt.semiauto.link:3128;";
  }

  // all other traffic goes IGW
  return "DIRECT";
}
