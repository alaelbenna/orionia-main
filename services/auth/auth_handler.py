
import time
from typing import Dict

import jwt
# from decouple import config - ficher de conf ? prendre config


JWT_SECRET = "PRIVATE_KEY_TO_GENERATE_1234"
JWT_ALGORITHM = "HS256"


def token_response(token: str):
    return {
        "access_token": token
    }

def signJWT(user_id: str) -> Dict[str, str]:
    payload = {
        "user_id": user_id,
        "expires": time.time() + 6000 # set time expiration
        #set parameter
    }
    token = jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

    return token_response(token)

#en fonction de ce que tu veux faire, il faut adapter l'encodage et le decoage
def decodeJWT(token: str) -> dict:
    try:
        decoded_token = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return decoded_token if decoded_token["expires"] >= time.time() else None
    except:
        return {}



