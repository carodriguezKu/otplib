import hotp from 'otplib-hotp';
import totp from 'otplib-totp';
import authenticator from 'otplib-authenticator';
import crypto from 'crypto';

/**
 * otplib
 *
 * One-Time Password Library
 *
 * @module otplib
 * @since 3.0.0
 */
authenticator.options = {crypto}
hotp.options = {crypto}
totp.options = {crypto}

export default {
  Authenticator: authenticator.Authenticator,
  HOTP: hotp.HOTP,
  TOTP: totp.TOTP,
  authenticator,
  hotp,
  totp,
};
