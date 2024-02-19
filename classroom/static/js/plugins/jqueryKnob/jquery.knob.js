  )r-   )rS   ro   r(   rm   �metadatar!   rn   �
format_urlrF   ry   rz   �urlparser   �parse_qsrK   �itemsr.   r   �urljoin�pathrE   )�	next_link�requestZ_parsed_next_linkZ_next_request_params)rN   rO   r.   r&   r'   rr   rG   rR   �prepare_requestq  s6   
�	����z2AgentPoolsOperations.list.<locals>.prepare_requestc                    s0   �� d| �}|j}� r� |�}|jpd t|�fS )NZAgentPoolListResult)rq   r�   r�   �iter)�pipeline_response�deserializedZlist_of_elem�ru   rr   rG   rR   �extract_data�  s
   z/AgentPoolsOperations.list.<locals>.extract_datac                    sV   �| �}d}�j jj|fd|i���}|j}|jdvr)t|j|� d� t|td��|S )NF�stream���   ��status_code�responserw   �r�   Zerror_format)rn   �	_pipeline�run�http_responser�   r   r   r   )r�   r�   �_streamr�   r�   )rw   r)   r�   rr   rG   rR   �get_next�  s   ���
z+AgentPoolsOperations.list.<locals>.get_next�N)rI   r   r   r   r   r   �updater   )rr   r&   r'   r)   r�   r�   rG   )
rN   rO   r.   ru   rw   r)   r�   r&   r'   rr   rR   rm   S  s   �!
zAgentPoolsOperations.listrF   r4   rU   c              
   K   �  t tttd�}|�|�di �pi � |�di �pi }t|�di �p"i �}|�d|�dd��}|�dd	�}	t|||| jj	|| j
jd
 ||d�}
t|
�}
| j�|
j�|
_d}| jjj|
fd|i|��}|j}|jdvrwt|j||d� t|td��| �d|�}|	r�|	||i �S |S )a�  Gets the agent pool.

        Gets the details of the agent pool by managed cluster and resource group.

        :param resource_group_name: The name of the resource group. Required.
        :type resource_group_name: str
        :param resource_name: The name of the managed cluster resource. Required.
        :type resource_name: str
        :param agent_pool_name: The name of the agent pool. Required.
        :type agent_pool_name: str
        :keyword callable cls: A custom type or function that will be passed the direct response
        :return: AgentPool or the result of cls(response)
        :rtype: ~azure.mgmt.containerservice.v2020_11_01.models.AgentPool
        :raises ~azure.core.exceptions.HttpResponseError:
        rv   rw   r,   r-   r.   r/   r0   ru   NrF   �r&   r'   rU   r(   r.   r3   r,   r-   Fr�   r�   r�   r�   �	AgentPool)r   r   r   r   r�   rI   r   rZ   ro   r(   �getr�   r!   rn   r�   rF   r�   r�   r�   r�   r   r   r   rq   �rr   r&   r'   rU   r)   rw   rN   rO   r.   ru   r�   r�   r�   r�   r�   rG   rG   rR   r�   �  sL   �
�
���
zAgentPoolsOperations.getrW   �
parametersc                 K   s~  t tttd�}|�|�di �pi � t|�di �pi �}t|�di �p$i �}|�d|�dd��}	|�d|�d	d ��}
|�d
d �}|
pCd}
d }d }t|tt	f�rR|}n| j
�|d�}t|||| jj|	|
||| jjd ||d�}t|�}| j�|j�|_d}| jjj|fd|i|��}|j}|jdvr�t|j||d� t|td��|jdkr�| �d|�}|jdkr�| �d|�}|r�|||i �S |S )Nrv   rw   r,   r-   r.   r/   r0   r\   r]   ru   r2   r�   rF   )r&   r'   rU   r(   r.   r\   �json�contentr3   r,   r-   Fr�   )r�   ��   r�   r�   r�   r�   )r   r   r   r   r�   rI   r   �
isinstancer   �bytesrp   �bodyr_   ro   r(   �_create_or_update_initialr�   r!   rn   r�   rF   r�   r�   r�   r�   r   r   r   rq   )rr   r&   r'   rU   r�   r)   rw   rN   rO   r.   r\   ru   �_json�_contentr�   r�   r�   r�   r�   rG   rG   rR   r�   �  sf   	�
����


z.AgentPoolsOperations._create_or_update_initialr2   )r\   r\   c                K   �   dS )a�  Creates or updates an agent pool.

        Creates or updates an agent pool in the specified managed cluster.

        :param resource_group_name: The name of the resource group. Required.
        :type resource_group_name: str
        :param resource_name: The name of the managed cluster resource. Required.
        :type resource_name: str
        :param agent_pool_name: The name of the agent pool. Required.
        :type agent_pool_name: str
        :param parameters: Parameters supplied to the Create or Update an agent pool operation.
         Required.
        :type parameters: ~azure.mgmt.containerservice.v2020_11_01.models.AgentPool
        :keyword content_type: Body Parameter content-type. Content type parameter for JSON body.
         Default value is "application/json".
        :paramtype content_type: str
        :keyword callable cls: A custom type or function that will be passed the direct response
        :keyword str continuation_token: A continuation token to restart a poller from a saved state.
        :keyword polling: By default, your polling method will be ARMPolling. Pass in False for this
         operation to not poll, or pass in your own initialized polling object for a personal polling
         strategy.
        :paramtype polling: bool or ~azure.core.polling.PollingMethod
        :keyword int polling_interval: Default waiting time between two polls for LRO operations if no
         Retry-After header is present.
        :return: An instance of LROPoller that returns either AgentPool or the result of cls(response)
        :rtype:
         ~azure.core.polling.LROPoller[~azure.mgmt.containerservice.v2020_11_01.models.AgentPool]
        :raises ~azure.core.exceptions.HttpResponseError:
        NrG   �rr   r&   r'   rU   r�   r\   r)   rG   rG   rR   �begin_create_or_update;  �    z+AgentPoolsOperations.begin_create_or_updatec                K   r�   )a�  Creates or updates an agent pool.

        Creates or updates an agent pool in the specified managed cluster.

        :param resource_group_name: The name of the resource group. Required.
        :type resource_group_name: str
        :param resource_name: The name of the managed cluster resource. Required.
        :type resource_name: str
        :param agent_pool_name: The name of the agent pool. Required.
        :type agent_pool_name: str
        :param parameters: Parameters supplied to the Create or Update an agent pool operation.
         Required.
        :type parameters: IO
        :keyword content_type: Body Parameter content-type. Content type parameter for binary body.
         Default value is "application/json".
        :paramtype content_type: str
        :keyword callable cls: A custom type or function that will be passed the direct response
        :keyword str continuation_token: A continuation token to restart a poller from a saved state.
        :keyword polling: By default, your polling method will be ARMPolling. Pass in False for this
         operation to not poll, or pass in your own initialized polling object for a personal polling
         strategy.
        :paramtype polling: bool or ~azure.core.polling.PollingMethod
        :keyword int polling_interval: Default waiting time between two polls for LRO operations if no
         Retry-After header is present.
        :return: An instance of LROPoller that returns either AgentPool or the result of cls(response)
        :rtype:
         ~azure.core.polling.LROPoller[~azure.mgmt.containerservice.v2020_11_01.models.AgentPool]
        :raises ~azure.core.exceptions.HttpResponseError:
        NrG   r�   rG   rG   rR   r�   d  r�   c                    s0  t |�di �pi �}t |�di �pi �}|�d|�dd��}|�d|�dd��}	|�d	d�� |�d
d�}
|�d�jj�}|�dd�}|du rZ�jd||||||	dd� ||d�	|��}|�dd� � �fdd�}|
du rwttt|fi |���}n|
du r�ttt� �}n|
}|r�t	j
||�j|d�S t	�j|||�S )a�  Creates or updates an agent pool.

        Creates or updates an agent pool in the specified managed cluster.

        :param resource_group_name: The name of the resource group. Required.
        :type resource_group_name: str
        :param resource_name: The name of the managed cluster resource. Required.
        :type resource_name: str
        :param agent_pool_name: The name of the agent pool. Required.
        :type agent_pool_name: str
        :param parameters: Parameters supplied to the Create or Update an agent pool operation. Is
         either a AgentPool type or a IO type. Required.
        :type parameters: ~azure.mgmt.containerservice.v2020_11_01.models.AgentPool or IO
        :keyword content_type: Body Parameter content-type. Known values are: 'application/json'.
         Default value is None.
        :paramtype content_type: str
        :keyword callable cls: A custom type or function that will be passed the direct response
        :keyword str continuation_token: A continuation token to restart a poller from a saved state.
        :keyword polling: By default, your polling method will be ARMPolling. Pass in False for this
         operation to not poll, or pass in your own initialized polling object for a personal polling
         strategy.
        :paramtype polling: bool or ~azure.core.polling.PollingMethod
        :keyword int polling_interval: Default waiting time between two polls for LRO operations if no
         Retry-After header is present.
        :return: An instance of LROPoller that returns either AgentPool or the result of cls(response)
        :rtype:
         ~azure.core.polling.LROPoller[~azure.mgmt.containerservice.v2020_11_01.models.AgentPool]
        :raises ~azure.core.exceptions.HttpResponseError:
        r,   r-   r.   r/   r0   r\   r]   Nru   �pollingT�polling_interval�continuation_tokenc                 S   �   | S r�   rG   ��x�y�zrG   rG   rR   �<lambda>�  r�   z=AgentPoolsOperations.begin_create_or_update.<locals>.<lambda>)	r&   r'   rU   r�   r.   r\   ru   r,   r-   rw   c                    �    �� d| �}� r� | |i �S |S �Nr�   �rq   �r�   r�   r�   rG   rR   �get_long_running_output�  �   zLAgentPoolsOperations.begin_create_or_update.<locals>.get_long_running_outputF��polling_methodr�   rj   Zdeserialization_callbackrG   )r   rI   ro   r�   r�   r
   r   r   r   r   �from_continuation_tokenrn   )rr   r&   r'   rU   r�   r)   rN   rO   r.   r\   r�   �	lro_delay�
cont_token�
raw_resultr�   r�   rG   r�   rR   r�   �  sJ   &�
��Nc              
   K   s  t tttd�}|�|�di �pi � |�di �pi }t|�di �p"i �}|�d|�dd��}|�dd �}	t|||| jj	|| j
jd	 ||d
�}
t|
�}
| j�|
j�|
_d}| jjj|
fd|i|��}|j}|jdvrwt|j||d� t|td��|	r|	|d i �S d S )Nrv   rw   r,   r-   r.   r/   r0   ru   rF   r�   Fr�   )��   ��   r�   r�   )r   r   r   r   r�   rI   r   ra   ro   r(   �_delete_initialr�   r!   rn   r�   rF   r�   r�   r�   r�   r   r   r   )rr   r&   r'   rU   r)   rw   rN   rO   r.   ru   r�   r�   r�   r�   rG   rG   rR   r�   �  sJ   �
�
���
�z$AgentPoolsOperations._delete_initialc              
      s  |� di �pi }t|� di �pi �}|� d|� dd��}|� dd�� |� dd	�}|� d
| jj�}	|� dd�}
|
du rL| jd||||dd� ||d�|��}|� dd� � fdd�}|d	u rhttt|	fi |���}n|du rsttt� �}n|}|
r�t	j
||
| j|d�S t	| j|||�S )a�  Deletes an agent pool.

        Deletes the agent pool in the specified managed cluster.

        :param resource_group_name: The name of the resource group. Required.
        :type resource_group_name: str
        :param resource_name: The name of the managed cluster resource. Required.
        :type resource_name: str
        :param agent_pool_name: The name of the agent pool. Required.
        :type agent_pool_name: str
        :keyword callable cls: A custom type or function that will be passed the direct response
        :keyword str continuation_token: A continuation token to restart a poller from a saved state.
        :keyword polling: By default, your polling method will be ARMPolling. Pass in False for this
         operation to not poll, or pass in your own initialized polling object for a personal polling
         strategy.
        :paramtype polling: bool or ~azure.core.polling.PollingMethod
        :keyword int polling_interval: Default waiting time between two polls for LRO operations if no
         Retry-After header is present.
        :return: An instance of LROPoller that returns either None or the result of cls(response)
        :rtype: ~azure.core.polling.LROPoller[None]
        :raises ~azure.core.exceptions.HttpResponseError:
        r,   r-   r.   r/   r0   ru   Nr�   Tr�   r�   c                 S   r�   r�   rG   r�   rG   rG   rR   r�   <  r�   z3AgentPoolsOperations.begin_delete.<locals>.<lambda>�r&   r'   rU   r.   ru   r,   r-   rw   c                    s   � r� | d i �S d S r�   rG   )r�   �ru   rG   rR   r�   C  s   �zBAgentPoolsOperations.begin_delete.<locals>.get_long_running_outputFr�   rG   )rI   r   ro   r�   r�   r
   r   r   r   r   r�   rn   �rr   r&   r'   rU   r)   rN   rO   r.   r�   r�   r�   r�   r�   r�   rG   r�   rR   �begin_delete  sD   ��
�z!AgentPoolsOperations.begin_deletec              
   K   r�   )aB  Gets upgrade profile for an agent pool.

        Gets the details of the upgrade profile for an agent pool with a specified resource group and
        managed cluster name.

        :param resource_group_name: The name of the resource group. Required.
        :type resource_group_name: str
        :param resource_name: The name of the managed cluster resource. Required.
        :type resource_name: str
        :param agent_pool_name: The name of the agent pool. Required.
        :type agent_pool_name: str
        :keyword callable cls: A custom type or function that will be passed the direct response
        :return: AgentPoolUpgradeProfile or the result of cls(response)
        :rtype: ~azure.mgmt.containerservice.v2020_11_01.models.AgentPoolUpgradeProfile
        :raises ~azure.core.exceptions.HttpResponseError:
        rv   rw   r,   r-   r.   r/   r0   ru   NrF   r�   Fr�   r�   r�   r�   �AgentPoolUpgradeProfile)r   r   r   r   r�   rI   r   rc   ro   r(   �get_upgrade_profiler�   r!   rn   r�   rF   r�   r�   r�   r�   r   r   r   rq   r�   rG   rG   rR   r�   Z  sL   �
�
���
z(AgentPoolsOperations.get_upgrade_profilerb   c              	   K   s  t tttd�}|�|�di �pi � |�di �pi }t|�di �p"i �}|�d|�dd��}|�dd	�}t||| jj	|| j
jd
 ||d�}	t|	�}	| j�|	j�|	_d}
| jjj|	fd|
i|��}|j}|jdvrvt|j||d� t|td��| �d|�}|r�|||i �S |S )a�  Gets a list of supported versions for the specified agent pool.

        Gets a list of supported versions for the specified agent pool.

        :param resource_group_name: The name of the resource group. Required.
        :type resource_group_name: str
        :param resource_name: The name of the managed cluster resource. Required.
        :type resource_name: str
        :keyword callable cls: A custom type or function that will be passed the direct response
        :return: AgentPoolAvailableVersions or the result of cls(response)
        :rtype: ~azure.mgmt.containerservice.v2020_11_01.models.AgentPoolAvailableVersions
        :raises ~azure.core.exceptions.HttpResponseError:
        rv   rw   r,   r-   r.   r/   r0   ru   NrF   rx   Fr�   r�   r�   r�   �AgentPoolAvailableVersions)r   r   r   r   r�   rI   r   re   ro   r(   �!get_available_agent_pool_versionsr�   r!   rn   r�   rF   r�   r�   r�   r�   r   r   r   rq   )rr   r&   r'   r)   rw   rN   rO   r.   ru   r�   r�   r�   r�   r�   rG   rG   rR   r�   �  sJ   �
�	���
z6AgentPoolsOperations.get_available_agent_pool_versionsrd   c              
   K   s  t tttd�}|�|�di �pi � |�di �pi }t|�di �p"i �}|�d|�dd��}|�dd �}	t|||| jj	|| j
jd	 ||d
�}
t|
�}
| j�|
j�|
_d}| jjj|
fd|i|��}|j}|jdvrwt|j||d� t|td��d }|jdkr�| �d|�}|	r�|	||i �S |S )Nrv   rw   r,   r-   r.   r/   r0   ru   rF   r�   Fr�   )r�   r�   r�   r�   r�   r�   )r   r   r   r   r�   rI   r   rh   ro   r(   �#_upgrade_node_image_version_initialr�   r!   rn   r�   rF   r�   r�   r�   r�   r   r   r   rq   r�   rG   rG   rR   r�   �  sP   �
�
���

z8AgentPoolsOperations._upgrade_node_image_version_initialrf   c              
      s  |� di �pi }t|� di �pi �}|� d|� dd��}|� dd�� |� dd	�}|� d
�jj�}	|� dd�}
|
du rL�jd||||dd� ||d�|��}|� dd� � �fdd�}|d	u rittt|	fi |���}n|du rtttt� �}n|}|
r�t	j
||
�j|d�S t	�j|||�S )af  Upgrade node image version of an agent pool to the latest.

        Upgrade node image version of an agent pool to the latest.

        :param resource_group_name: The name of the resource group. Required.
        :type resource_group_name: str
        :param resource_name: The name of the managed cluster resource. Required.
        :type resource_name: str
        :param agent_pool_name: The name of the agent pool. Required.
        :type agent_pool_name: str
        :keyword callable cls: A custom type or function that will be passed the direct response
        :keyword str continuation_token: A continuation token to restart a poller from a saved state.
        :keyword polling: By default, your polling method will be ARMPolling. Pass in False for this
         operation to not poll, or pass in your own initialized polling object for a personal polling
         strategy.
        :paramtype polling: bool or ~azure.core.polling.PollingMethod
        :keyword int polling_interval: Default waiting time between two polls for LRO operations if no
         Retry-After header is present.
        :return: An instance of LROPoller that returns either AgentPool or the result of cls(response)
        :rtype:
         ~azure.core.polling.LROPoller[~azure.mgmt.containerservice.v2020_11_01.models.AgentPool]
        :raises ~azure.core.exceptions.HttpResponseError:
        r,   r-   r.   r/   r0   ru   Nr�   Tr�   r�   c                 S   r�   r�   rG   r�   rG   rG   rR   r�   ?  r�   zGAgentPoolsOperations.begin_upgrade_node_image_version.<locals>.<lambda>r�   rw   c                    r�   r�   r�   r�   r�   rG   rR   r�   F  r�   zVAgentPoolsOperations.begin_upgrade_node_image_version.<locals>.get_long_running_outputFr�   rG   )rI   r   ro   r�   r�   r
   r   r   r   r   r�   rn   r�   rG   r�   rR   � begin_upgrade_node_image_version  sD   ��
�z5AgentPoolsOperations.begin_upgrade_node_image_version)�__name__�
__module__�__qualname__�__doc__�_modelsr   rt   r   r5   r   r   rm   r�   r�   r�   r	   r   r�   r   r   r�   r�   r�   r�   r�   r�   r�   r   r�   r�   rG   rG   rG   rR   ri   @  sN   	 W������@������
�F��������	�(�������	�(������S�����
�-������B������A�����=�����
�3������E
�ri   )A�sys�typingr   r   r   r   r   r   r   r	   r
   r   �urllib.parsery   Zazure.core.exceptionsr   r   r   r   r   r   Zazure.core.pagingr   Zazure.core.pipeliner   Zazure.core.pipeline.transportr   Zazure.core.pollingr   r   r   Zazure.core.restr   Zazure.core.tracing.decoratorr   Zazure.core.utilsr   Zazure.mgmt.core.exceptionsr   Z#azure.mgmt.core.polling.arm_pollingr   � r   r�   Z_serializationr    �_vendorr!   r"   �version_infor$   Ztyping_extensionsr%   r5   ZClsTyperJ   Zclient_side_validationrS   rZ   r_   ra   rc   re   rh   ri   rG   rG   rG   rR   �<module>   s�   0 
&����
�&�����
�'�����
�*�����
�'�����
�'����
�&�����
�'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              o
    u�&d*�  �                   @   s2  d dl T eddd�G dd� de��Zeddd�G dd	� d	e��Zed
dd�G dd� de��Zeddd�G dd� de��Zed�G dd� de	��Z
G dd� d�Zeedddefd�G dd� d��Zeedddefd�G dd