function FindProxyForURL(url, host) {
  // add proxy to ladc
  if (
    localHostOrDomainIs(host, "adp417pcv.acnshared.com")
  ) {
    return "PROXY 10.0.0.28:3128;";
  }

  // all other traffic goes IGW
  return "DIRECT";
}
