function FindProxyForURL(url, host) {
  // add proxy
  if (dnsDomainIs(host, ".acnshared.com")) {
    return "PROXY 10.0.0.28:3128; HTTP 10.0.0.28:3128;";
  }

  // all other traffic goes IGW
  return "DIRECT";
}
