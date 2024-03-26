package limited_edition.Golden_Glitz.Services;

import limited_edition.Golden_Glitz.DTO.Request.AuthenticationRequest;
import limited_edition.Golden_Glitz.DTO.Request.RegisterRequest;
import limited_edition.Golden_Glitz.DTO.Response.AuthenticationResponse;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);
}
