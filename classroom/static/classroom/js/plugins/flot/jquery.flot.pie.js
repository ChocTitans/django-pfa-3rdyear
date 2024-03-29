r,   �managed_instance_param_typer   r   r	   �secondary_type_param_type)
r@   �_�cZrestore_point_arg_groupZsearch_arg_groupZ
auth_groupr�   Zpolicy_arg_groupZnotification_arg_groupr	  rA   rA   rB   �load_arguments�  s�  ����	�����������������������������������������
�������#	�������'������������	����������������������'������%����
��������	������������������������)��
�����
������������)�����������������
���������:����� ���������������
�
���������	���

��)���
��
��
�
���
��=����
������)�������������������������7����������+�������������������
�������������
����	����
�
���������
�������������
�
������N���
����
��
�����
��b��
��
���
��
��<������
������
�����������������
������	������
��.�����������������������
�����
�����
����	�
�
�
�

��%��
������������
�
��+����
�������$�r.  )vrF   �enumr   Zazure.mgmt.sql.modelsr   r   r   r   r   r   r	   r
   r   r   r   r   r   r   r   r   r   r   r   r   r   r   r   Z"azure.cli.core.commands.parametersr   r   r   r   r   r   Z"azure.cli.core.commands.validatorsr    Zknack.argumentsr!   r"   Zcustomr$   r%   r&   r'   r(   r)   r*   r+   r,   r-   r.   r/   Z_validatorsr0   r1   r2   r3   r4   r]   r�   r  Zserverless_arg_groupr  r  r�   Zlog_analytics_arg_groupZevent_hub_arg_grouprb   r  r  r  r  r   r  r�   r�   r�   r�   rX   r�   r�   r�   r�   r�   r�   r�   r�   r�   r�   r�   r�   r�   r*  r&  r'  r>   r(  r�   r)  r!  r"  r+  r$  r%  r�   r�   r  r  r  r  r  r  r�   r�   r�   r�   r�   r.  rA   rA   rA   rB   �<module>   s�  d 	8����������
����������������
��
�������
��������Z i                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       o
    "�&d�p  �                   @   s(   d Z ddlZe�e�ZG dd� d�ZdS )zU
oauthlib.oauth2.rfc6749.request_validator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
�    Nc                   @   s�   e Zd Zdd� Zdd� Zdd� Zdd� Zd	d
� Zdd� Zdd� Z	dd� Z
dd� Zdd� Zdd� Zdd� Zdd� Zdd� Zdd� Zdd � Zd!d"� Zd#d$� Zd%d&� Zd'd(� Zd)d*� Zd+d,� Zd-d.� Zd/d0� Zd1d2� Zd3d4� Zd5d6� Zd7d8� Zd9S ):�RequestValidatorc                 O   �   dS )a<  Determine if client authentication is required for current request.

        According to the rfc6749, client authentication is required in the following cases:
            - Resource Owner Password Credentials Grant, when Client type is Confidential or when
              Client was issued client credentials or whenever Client provided client
              authentication, see `Section 4.3.2`_.
            - Authorization Code Grant, when Client type is Confidential or when Client was issued
              client credentials or whenever Client provided client authentication,
              see `Section 4.1.3`_.
            - Refresh Token Grant, when Client type is Confidential or when Client was issued
              client credentials or whenever Client provided client authentication, see
              `Section 6`_

        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: True or False

        Method is used by:
            - Authorization Code Grant
            - Resource Owner Password Credentials Grant
            - Refresh Token Grant

        .. _`Section 4.3.2`: https://tools.ietf.org/html/rfc6749#section-4.3.2
        .. _`Section 4.1.3`: https://tools.ietf.org/html/rfc6749#section-4.1.3
        .. _`Section 6`: https://tools.ietf.org/html/rfc6749#section-6
        T� ��self�request�args�kwargsr   r   �qD:\a\_work\1\s\build_scripts\windows\artifacts\cli\Lib\site-packages\oauthlib/oauth2/rfc6749/request_validator.py�client_authentication_required   �   z/RequestValidator.client_authentication_requiredc                 O   �   t d��)a�  Authenticate client through means outside the OAuth 2 spec.

        Means of authentication is negotiated beforehand and may for example
        be `HTTP Basic Authentication Scheme`_ which utilizes the Authorization
        header.

        Headers may be accesses through request.headers and parameters found in
        both body and query can be obtained by direct attribute access, i.e.
        request.client_id for client_id in the URL query.
		
        The authentication process is required to contain the identification of
        the client (i.e. search the database based on the client_id). In case the
        client doesn't exist based on the received client_id, this method has to
        return False and the HTTP response created by the library will contain
        'invalid_client' message. 

        After the client identification succeeds, this method needs to set the
        client on the request, i.e. request.client = client. A client object's
        class must contain the 'client_id' attribute and the 'client_id' must have
        a value.

        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: True or False

        Method is used by:
            - Authorization Code Grant
            - Resource Owner Password Credentials Grant (may be disabled)
            - Client Credentials Grant
            - Refresh Token Grant

        .. _`HTTP Basic Authentication Scheme`: https://tools.ietf.org/html/rfc1945#section-11.1
        �&Subclasses must implement this method.��NotImplementedErrorr   r   r   r
   �authenticate_client)   �   "z$RequestValidator.authenticate_clientc                 O   r   )a`  Ensure client_id belong to a non-confidential client.

        A non-confidential client is one that is not required to authenticate
        through other means, such as using HTTP Basic.

        Note, while not strictly necessary it can often be very convenient
        to set request.client to the client object associated with the
        given client_id.

        :param client_id: Unicode client identifier.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: True or False

        Method is used by:
            - Authorization Code Grant
        r   r   �r   �	client_idr   r   r	   r   r   r
   �authenticate_client_idM   �   z'RequestValidator.authenticate_client_idc                 O   r   )a�  Ensure that the authorization process represented by this authorization
        code began with this 'redirect_uri'.

        If the client specifies a redirect_uri when obtaining code then that
        redirect URI must be bound to the code and verified equal in this
        method, according to RFC 6749 section 4.1.3.  Do not compare against
        the client's allowed redirect URIs, but against the URI used when the
        code was saved.

        :param client_id: Unicode client identifier.
        :param code: Unicode authorization_code.
        :param redirect_uri: Unicode absolute URI.
        :param client: Client object set by you, see ``.authenticate_client``.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: True or False

        Method is used by:
            - Authorization Code Grant (during token request)
        r   r   )r   r   �code�redirect_uri�clientr   r   r	   r   r   r
   �confirm_redirect_uria   s   z%RequestValidator.confirm_redirect_uric                 O   r   )a\  Get the default redirect URI for the client.

        :param client_id: Unicode client identifier.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: The default redirect URI for the client

        Method is used by:
            - Authorization Code Grant
            - Implicit Grant
        r   r   r   r   r   r
   �get_default_redirect_uriy   s   z)RequestValidator.get_default_redirect_uric                 O   r   )a�  Get the default scopes for the client.

        :param client_id: Unicode client identifier.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: List of default scopes

        Method is used by all core grant types:
            - Authorization Code Grant
            - Implicit Grant
            - Resource Owner Password Credentials Grant
            - Client Credentials grant
        r   r   r   r   r   r
   �get_default_scopes�   �   z#RequestValidator.get_default_scopesc                 O   r   )a/  Get the list of scopes associated with the refresh token.

        :param refresh_token: Unicode refresh token.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: List of scopes.

        Method is used by:
            - Refresh token grant
        r   r   )r   �refresh_tokenr   r   r	   r   r   r
   �get_original_scopes�   �   z$RequestValidator.get_original_scopesc                 O   r   )aO  Check if requested scopes are within a scope of the refresh token.

        When access tokens are refreshed the scope of the new token
        needs to be within the scope of the original token. This is
        ensured by checking that all requested scopes strings are on
        the list returned by the get_original_scopes. If this check
        fails, is_within_original_scope is called. The method can be
        used in situations where returning all valid scopes from the
        get_original_scopes is not practical.

        :param request_scopes: A list of scopes that were requested by client.
        :param refresh_token: Unicode refresh_token.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: True or False

        Method is used by:
            - Refresh token grant
        Fr   )r   Zrequest_scopesr   r   r   r	   r   r   r
   �is_within_original_scope�   s   z)RequestValidator.is_within_original_scopec                 O   r   )a  Introspect an access or refresh token.

        Called once the introspect request is validated. This method should
        verify the *token* and either return a dictionary with the list of
        claims associated, or `None` in case the token is unknown.

        Below the list of registered claims you should be interested in:

        - scope : space-separated list of scopes
        - client_id : client identifier
        - username : human-readable identifier for the resource owner
        - token_type : type of the token
        - exp : integer timestamp indicating when this token will expire
        - iat : integer timestamp indicating when this token was issued
        - nbf : integer timestamp indicating when it can be "not-before" used
        - sub : subject of the token - identifier of the resource owner
        - aud : list of string identifiers representing the intended audience
        - iss : string representing issuer of this token
        - jti : string identifier for the token

        Note that most of them are coming directly from JWT RFC. More details
        can be found in `Introspect Claims`_ or `JWT Claims`_.

        The implementation can use *token_type_hint* to improve lookup
        efficiency, but must fallback to other types to be compliant with RFC.

        The dict of claims is added to request.token after this method.

        :param token: The token string.
        :param token_type_hint: access_token or refresh_token.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request

        Method is used by:
            - Introspect Endpoint (all grants are compatible)

        .. _`Introspect Claims`: https://tools.ietf.org/html/rfc7662#section-2.2
        .. _`JWT Claims`: https://tools.ietf.org/html/rfc7519#section-4
        r   r   �r   �tokenZtoken_type_hintr   r   r	   r   r   r
   �introspect_token�   s   (z!RequestValidator.introspect_tokenc                 O   r   )aH  Invalidate an authorization code after use.

        :param client_id: Unicode client identifier.
        :param code: The authorization code grant (request.code).
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request

        Method is used by:
            - Authorization Code Grant
        r   r   �r   r   r   r   r   r	   r   r   r
   �invalidate_authorization_code�   r    z.RequestValidator.invalidate_authorization_codec                 O   r   )a*  Revoke an access or refresh token.

        :param token: The token string.
        :param token_type_hint: access_token or refresh_token.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request

        Method is used by:
            - Revocation Endpoint
        r   r   r"   r   r   r
   �revoke_token�   r    zRequestValidator.revoke_tokenc                 C   r   )a�  Determine whether to rotate the refresh token. Default, yes.

        When access tokens are refreshed the old refresh token can be kept
        or replaced with a new one (rotated). Return True to rotate and
        and False for keeping original.

        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        :rtype: True or False

        Method is used by:
            - Refresh Token Grant
        Tr   )r   r   r   r   r
   �rotate_refresh_token�   s   z%RequestValidator.rotate_refresh_tokenc                 O   r   )ao  Persist the authorization_code.

        The code should at minimum be stored with:
            - the client_id (``client_id``)
            - the redirect URI used (``request.redirect_uri``)
            - a resource owner / user (``request.user``)
            - the authorized scopes (``request.scopes``)

        To support PKCE, you MUST associate the code with:
            - Code Challenge (``request.code_challenge``) and
            - Code Challenge Method (``request.code_challenge_method``)

        To support OIDC, you MUST associate the code with:
            - nonce, if present (``code["nonce"]``)

        The ``code`` argument is actually a dictionary, containing at least a
        ``code`` key with the actual authorization code:

            ``{'code': 'sdf345jsdf0934f'}``

        It may also have a ``claims`` parameter which, when present, will be a dict
        deserialized from JSON as described at
        http://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter
        This value should be saved in this method and used again in ``.validate_code``.

        :param client_id: Unicode client identifier.
        :param code: A dict of the authorization code grant and, optionally, state.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request

        Method is used by:
            - Authorization Code Grant
        r   r   r%   r   r   r
   �save_authorization_code  r   z(RequestValidator.save_authorization_codec                 O   s   | j ||g|�R i |��S )z�Persist the token with a token type specific method.

        Currently, only save_bearer_token is supported.

        :param token: A (Bearer) token dict.
        :param request: OAuthlib request.
        :type request: oauthlib.common.Request
        )�save_bearer_token�r   r#   r   r   r	   r   r   r
   �
save_token2  s   	zRequestValidator.save_tokenc                 O   r   )a�  Persist the Bearer token.

        The Bearer token should at minimum be associated with:
            - a client and it's client_id, if available
            - a resource owner / user (request.user)
            - authorized scopes (request.scopes)
            - an expiration time
            - a refresh token, if issued
            - a claims document, if present in request.claims

        The Bearer token dict may hold a number of items::

            {
                'token_type': 'Bearer',
                'access_token': 'askfjh234as9sd8',
                'expires_in': 3600,
                'scope': 'string of space separated authorized scopes',
                'refresh_token': '23sdf876234',  # if issued
                'state': 'given_by_client',  # if supplied by client (implicit ONLY)
            }

        Note that while "scope" is a string-separated list of authorized scopes,
        the original list is still available in request.scopes.

        The token dict is passed as a reference so any changes made to the dictionary
        will go back to the user.  If additional information must return to the client
        user, and it is only possible to get this information after writing the token
        to storage, it should be added to the token dictionary.  If the token
        dictionary must be modified but the changes should not go back to the user,
        a copy of the dictionary must be made before making the changes.

        Also note that if an Authorization Code grant request included a valid claims
        parameter (for OpenID Connect) then the request.claims property will contain
        the claims dict, which should be saved for later use when